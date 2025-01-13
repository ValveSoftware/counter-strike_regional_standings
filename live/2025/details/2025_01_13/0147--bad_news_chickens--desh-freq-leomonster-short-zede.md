### Roster Details<br />
Team Name: Bad News Chickens<br />
Roster: desh, fREQ, Leomonster, short, zede<br />
Global Rank: [147](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  726.3<br />
<br />
Final Rank Value (726.3) = Starting Rank Value (690.3) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.3
- 400 + ( ( 0.146 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 690.3


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
|           15 |       15 | 2025-01-10 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -2.81 | desh, fREQ, Leomonster, short, zede   |
|           14 |       30 | 2025-01-09 | 9z Academy      | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.258 (0.099)    | 0 (0.000) |     8.81 | desh, fREQ, Leomonster, short, zede   |
|           13 |      138 | 2024-12-18 | LaChampionsLiga | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.121 (0.017)    | 0 (0.000) |    11.26 | Alisson, desh, Leomonster, short, skr |
|           12 |      158 | 2024-12-16 | ex-Vikings      | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.329 (0.047)    | 0 (0.000) |    17.00 | Alisson, desh, Leomonster, short, skr |
|           11 |      230 | 2024-12-13 | GameHunters     | W   | 0.993      | 0.143        | 0.002 (0.000)    | 0.323 (0.046)    | 0 (0.000) |    17.01 | Alisson, desh, Leomonster, short, skr |
|           10 |      551 | 2024-11-27 | Tropa do Taco   | L   | 0.887      | -            | -                | -                | -         |    -9.14 | Alisson, desh, Leomonster, short, skr |
|            9 |      726 | 2024-11-17 | Tropa do Taco   | L   | 0.823      | -            | -                | -                | -         |   -10.07 | Alisson, desh, Leomonster, short, skr |
|            8 |     1013 | 2024-11-06 | GameHunters     | L   | 0.748      | -            | -                | -                | -         |   -11.45 | Alisson, desh, Leomonster, short, skr |
|            7 |     1640 | 2024-10-06 | MIBR Academy    | W   | 0.542      | 0.270        | 0.003 (0.000)    | 0.191 (0.028)    | 0 (0.000) |     7.69 | Alisson, desh, Leomonster, short, skr |
|            6 |     1955 | 2024-09-27 | Case            | L   | 0.482      | -            | -                | -                | -         |    -6.17 | Alisson, desh, Leomonster, short, skr |
|            5 |     1958 | 2024-09-27 | GameHunters     | W   | 0.482      | 0.143        | 0.002 (0.000)    | 0.323 (0.022)    | 0 (0.000) |     7.23 | Alisson, desh, Leomonster, short, skr |
|            4 |     2613 | 2024-09-07 | MIBR Academy    | W   | 0.347      | 0.270        | 0.003 (0.000)    | 0.191 (0.018)    | 0 (0.000) |     5.14 | Alisson, desh, Leomonster, short, skr |
|            3 |     2634 | 2024-09-06 | Yawara          | W   | 0.341      | 0.270        | 0.005 (0.000)    | 0.263 (0.024)    | 0 (0.000) |     5.21 | Alisson, desh, Leomonster, short, skr |
|            2 |     2776 | 2024-09-02 | Solid           | L   | 0.314      | -            | -                | -                | -         |    -2.37 | Alisson, desh, Leomonster, short, skr |
|            1 |     3870 | 2024-08-01 | Case            | L   | 0.102      | -            | -                | -                | -         |    -1.33 | Alisson, desh, Leomonster, short, skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,853.08)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.823 | $523.00        | $430.26         |
| 2024-10-06 |      0.542 | $1,600.00      | $867.06         |
| 2024-09-07 |      0.347 | $1,600.00      | $555.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
