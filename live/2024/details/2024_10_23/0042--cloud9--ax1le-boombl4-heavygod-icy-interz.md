### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [42](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [28]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1112.4<br />
<br />
Final Rank Value (1112.4) = Starting Rank Value (933.0) + Head To Head Adjustments (179.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.492[<sup>1</sup>](#table2)
- Bounty Collected: 0.432[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 933.0
- 400 + ( ( 0.272 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 933.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |        9 | 2024-10-22 | 9z                | W   | 1.000      | 0.477        | 0.271 (0.129)    | 0.353 (0.168)    | 0 (0.000) |    21.60 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |       15 | 2024-10-22 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -1.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |      233 | 2024-10-11 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -13.53 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     1169 | 2024-09-13 | Gaimin Gladiators | L   | 0.932      | -            | -                | -                | -         |   -20.83 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     1332 | 2024-09-07 | Zero Tenacity     | W   | 0.892      | 0.384        | 0.127 (0.044)    | 0.806 (0.276)    | 0 (0.000) |    12.76 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     1356 | 2024-09-06 | BetBoom           | W   | 0.886      | 0.384        | 0.198 (0.067)    | 0.423 (0.144)    | 0 (0.000) |    17.28 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     1403 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.878      | 0.384        | 0.081 (0.027)    | 0.794 (0.268)    | 0 (0.000) |     9.37 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     1495 | 2024-09-02 | GamerLegion       | W   | 0.858      | 0.384        | 0.267 (0.088)    | 0.596 (0.197)    | 0 (0.000) |    14.39 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     1577 | 2024-08-29 | Insilio           | W   | 0.833      | 0.384        | -                | 0.696 (0.223)    | 0 (0.000) |     8.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     1692 | 2024-08-27 | fnatic            | L   | 0.819      | -            | -                | -                | -         |    -4.49 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     1754 | 2024-08-26 | Eternal Fire      | L   | 0.813      | -            | -                | -                | -         |    -0.32 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     1770 | 2024-08-26 | HEROIC            | W   | 0.812      | 0.143        | 0.417 (0.048)    | 0.516 (0.060)    | 0 (0.000) |    24.56 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     1863 | 2024-08-23 | paiN              | L   | 0.792      | -            | -                | -                | -         |    -1.41 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     1895 | 2024-08-22 | 9 Pandas          | W   | 0.785      | 0.143        | -                | 0.690 (0.077)    | 0 (0.000) |    14.75 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     1951 | 2024-08-21 | Passion UA        | W   | 0.779      | 0.143        | 0.205 (0.023)    | 1.000 (0.111)    | 0 (0.000) |    15.77 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     1982 | 2024-08-21 | Johnny Speeds     | W   | 0.777      | 0.143        | -                | 1.000 (0.111)    | 0 (0.000) |    14.69 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     2017 | 2024-08-19 | 500               | W   | 0.767      | -            | -                | -                | -         |     6.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     2023 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.766      | 0.143        | 0.154 (0.017)    | -                | -         |    20.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     2028 | 2024-08-19 | UNPAID            | W   | 0.766      | 0.143        | 0.202 (0.022)    | -                | -         |    20.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     2516 | 2024-08-03 | Johnny Speeds     | L   | 0.660      | -            | -                | -                | -         |    -6.57 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     2545 | 2024-08-02 | UNPAID            | W   | 0.653      | 0.143        | 0.202 (0.019)    | -                | -         |    18.53 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     2586 | 2024-08-01 | AMKAL             | W   | 0.647      | -            | -                | -                | -         |    13.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     2599 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.645      | -            | -                | -                | -         |    -2.77 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     2631 | 2024-07-31 | 3DMAX             | L   | 0.640      | -            | -                | -                | -         |    -0.83 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     2655 | 2024-07-31 | FaZe              | L   | 0.638      | -            | -                | -                | -         |    -0.25 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,204.88)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-07 |      0.892 | $20,000.00     | $17,843.23      |
| 2024-08-25 |      0.807 | $5,000.00      | $4,033.41       |
| 2024-08-04 |      0.666 | $5,000.00      | $3,328.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
