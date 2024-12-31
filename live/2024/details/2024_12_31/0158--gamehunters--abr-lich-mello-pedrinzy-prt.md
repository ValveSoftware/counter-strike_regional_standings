### Roster Details<br />
Team Name: GameHunters<br />
Roster: abr, Lich, mello, pedrinzy, prt<br />
Global Rank: [158](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [42]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  712.5<br />
<br />
Final Rank Value (712.5) = Starting Rank Value (678.9) + Head To Head Adjustments (33.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.9
- 400 + ( ( 0.143 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 678.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       46 | 2024-12-21 | LaChampionsLiga   | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.119 (0.017)    | 0 (0.000) |    10.40 | abr, Lich, mello, pedrinzy, prt      |
|           15 |       57 | 2024-12-20 | Fake do Biru      | L   | 1.000      | -            | -                | -                | -         |   -21.63 | abr, Lich, mello, pedrinzy, prt      |
|           14 |       97 | 2024-12-17 | 2070              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.211 (0.030)    | 0 (0.000) |    12.43 | abr, Lich, mello, pedrinzy, prt      |
|           13 |      118 | 2024-12-15 | BeBold            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.043 (0.006)    | 0 (0.000) |     6.69 | abr, Lich, mello, pedrinzy, prt      |
|           12 |      174 | 2024-12-13 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |   -17.32 | abr, Lich, mello, pedrinzy, prt      |
|           11 |      483 | 2024-11-28 | Dusty Roots       | L   | 0.992      | -            | -                | -                | -         |   -12.04 | cerolzin, Lich, mello, pedrinzy, prt |
|           10 |      514 | 2024-11-25 | JOGA DE TERNO     | W   | 0.975      | 0.371        | 0.000 (0.000)    | 0.151 (0.055)    | 0 (0.000) |    10.41 | cerolzin, Lich, mello, pedrinzy, prt |
|            9 |      550 | 2024-11-23 | Tropa do Taco     | L   | 0.961      | -            | -                | -                | -         |   -12.14 | cerolzin, Lich, mello, pedrinzy, prt |
|            8 |      612 | 2024-11-21 | 2070              | W   | 0.946      | 0.371        | 0.003 (0.001)    | 0.211 (0.074)    | 0 (0.000) |    11.54 | cerolzin, Lich, mello, pedrinzy, prt |
|            7 |      661 | 2024-11-18 | VELOX             | W   | 0.926      | 0.371        | 0.000 (0.000)    | 0.158 (0.054)    | 0 (0.000) |     7.46 | abr, Lich, mello, pedrinzy, prt      |
|            6 |      923 | 2024-11-08 | Sharks            | L   | 0.860      | -            | -                | -                | -         |    -2.10 | abr, Lich, mello, pedrinzy, prt      |
|            5 |      957 | 2024-11-06 | Bad News Chickens | W   | 0.847      | 0.371        | 0.007 (0.002)    | 0.184 (0.058)    | 0 (0.000) |    12.82 | abr, Lich, mello, pedrinzy, prt      |
|            4 |     1054 | 2024-11-01 | JOGA DE TERNO     | W   | 0.815      | 0.371        | 0.000 (0.000)    | 0.151 (0.046)    | 0 (0.000) |    10.21 | abr, Lich, mello, pedrinzy, prt      |
|            3 |     1083 | 2024-10-31 | Players           | W   | 0.806      | 0.371        | 0.011 (0.003)    | 0.393 (0.118)    | 0 (0.000) |    13.62 | abr, Lich, mello, pedrinzy, prt      |
|            2 |     1136 | 2024-10-28 | Patins da Ferrari | W   | 0.787      | 0.371        | 0.003 (0.001)    | 0.194 (0.057)    | 0 (0.000) |    11.91 | abr, Lich, mello, pedrinzy, prt      |
|            1 |     1902 | 2024-09-27 | Bad News Chickens | L   | 0.581      | -            | -                | -                | -         |    -8.69 | abr, Lich, mello, pedrinzy, prt      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($651.43)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
