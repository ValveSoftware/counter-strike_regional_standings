### Roster Details<br />
Team Name: Bad News Chickens<br />
Roster: desh, fREQ, Leomonster, short, zede<br />
Global Rank: [147](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  724.2<br />
<br />
Final Rank Value (724.2) = Starting Rank Value (689.5) + Head To Head Adjustments (34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.5
- 400 + ( ( 0.146 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 689.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       31 | 2025-01-10 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -2.95 | desh, fREQ, Leomonster, short, zede   |
|           14 |       43 | 2025-01-09 | 9z Academy      | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.267 (0.103)    | 0 (0.000) |     8.87 | desh, fREQ, Leomonster, short, zede   |
|           13 |      151 | 2024-12-18 | LaChampionsLiga | W   | 0.986      | 0.143        | 0.009 (0.001)    | 0.125 (0.018)    | 0 (0.000) |    11.31 | Alisson, desh, Leomonster, short, skr |
|           12 |      171 | 2024-12-16 | ex-Vikings      | W   | 0.973      | 0.143        | 0.015 (0.002)    | 0.331 (0.046)    | 0 (0.000) |    16.54 | Alisson, desh, Leomonster, short, skr |
|           11 |      243 | 2024-12-13 | GameHunters     | W   | 0.951      | 0.143        | 0.002 (0.000)    | 0.335 (0.046)    | 0 (0.000) |    16.27 | Alisson, desh, Leomonster, short, skr |
|           10 |      564 | 2024-11-27 | Tropa do Taco   | L   | 0.845      | -            | -                | -                | -         |    -8.85 | Alisson, desh, Leomonster, short, skr |
|            9 |      739 | 2024-11-17 | Tropa do Taco   | L   | 0.781      | -            | -                | -                | -         |    -9.63 | Alisson, desh, Leomonster, short, skr |
|            8 |     1026 | 2024-11-06 | GameHunters     | L   | 0.706      | -            | -                | -                | -         |   -10.83 | Alisson, desh, Leomonster, short, skr |
|            7 |     1653 | 2024-10-06 | MIBR Academy    | W   | 0.500      | 0.270        | 0.003 (0.000)    | 0.195 (0.026)    | 0 (0.000) |     7.13 | Alisson, desh, Leomonster, short, skr |
|            6 |     1968 | 2024-09-27 | Case            | L   | 0.440      | -            | -                | -                | -         |    -5.87 | Alisson, desh, Leomonster, short, skr |
|            5 |     1971 | 2024-09-27 | GameHunters     | W   | 0.440      | 0.143        | 0.002 (0.000)    | 0.335 (0.021)    | 0 (0.000) |     6.62 | Alisson, desh, Leomonster, short, skr |
|            4 |     2626 | 2024-09-07 | MIBR Academy    | W   | 0.305      | 0.270        | 0.003 (0.000)    | 0.195 (0.016)    | 0 (0.000) |     4.52 | Alisson, desh, Leomonster, short, skr |
|            3 |     2647 | 2024-09-06 | Yawara          | W   | 0.299      | 0.270        | 0.005 (0.000)    | 0.268 (0.022)    | 0 (0.000) |     4.59 | Alisson, desh, Leomonster, short, skr |
|            2 |     2789 | 2024-09-02 | Solid           | L   | 0.272      | -            | -                | -                | -         |    -2.10 | Alisson, desh, Leomonster, short, skr |
|            1 |     3883 | 2024-08-01 | Case            | L   | 0.060      | -            | -                | -                | -         |    -0.81 | Alisson, desh, Leomonster, short, skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,696.57)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.781 | $523.00        | $408.28         |
| 2024-10-06 |      0.500 | $1,600.00      | $799.80         |
| 2024-09-07 |      0.305 | $1,600.00      | $488.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
