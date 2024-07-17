### Roster Details<br />
Team Name: 9INE<br />
Roster: mantuu, misutaaa, raalz, refrezh, s0und<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  860.8<br />
<br />
Final Rank Value (860.8) = Starting Rank Value (820.4) + Head To Head Adjustments (40.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.4
- 400 + ( ( 0.196 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 820.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |        5 | 2024-07-17 | Endpoint      | W   | 1.000      | 0.371        | 0.018 (0.007)    | 0.498 (0.185)    | 0 (0.000) |    17.30 | mantuu, misutaaa, raalz, refrezh, s0und |
|           14 |       16 | 2024-07-17 | Rebels        | L   | 1.000      | -            | -                | -                | -         |    -7.89 | mantuu, misutaaa, raalz, refrezh, s0und |
|           13 |       54 | 2024-07-16 | CPH Wolves    | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.202 (0.067)    | 0 (0.000) |    13.94 | mantuu, misutaaa, raalz, refrezh, s0und |
|           12 |      105 | 2024-07-15 | B8            | L   | 1.000      | -            | -                | -                | -         |    -3.41 | mantuu, misutaaa, raalz, refrezh, s0und |
|           11 |      144 | 2024-07-13 | ROSOMAHA      | W   | 1.000      | 0.371        | 0.002 (0.001)    | 0.041 (0.015)    | 0 (0.000) |     5.00 | mantuu, misutaaa, raalz, refrezh, s0und |
|           10 |      171 | 2024-07-11 | Endpoint      | L   | 1.000      | -            | -                | -                | -         |   -12.91 | mantuu, misutaaa, raalz, refrezh, s0und |
|            9 |      194 | 2024-07-10 | Sashi         | L   | 1.000      | -            | -                | -                | -         |    -3.40 | mantuu, misutaaa, n0te, raalz, s0und    |
|            8 |      214 | 2024-07-09 | Johnny Speeds | L   | 1.000      | -            | -                | -                | -         |    -2.32 | mantuu, misutaaa, raalz, refrezh, s0und |
|            7 |      421 | 2024-06-13 | 3DMAX         | L   | 0.974      | -            | -                | -                | -         |    -3.76 | mantuu, misutaaa, raalz, refrezh, s0und |
|            6 |      538 | 2024-06-09 | 3DMAX         | W   | 0.947      | 0.450        | 0.209 (0.089)    | 1.000 (0.426)    | 0 (0.000) |    25.48 | mantuu, misutaaa, raalz, refrezh, s0und |
|            5 |      604 | 2024-06-08 | BLEED         | L   | 0.941      | -            | -                | -                | -         |    -2.78 | mantuu, misutaaa, raalz, refrezh, s0und |
|            4 |      659 | 2024-06-07 | Endpoint      | W   | 0.934      | 0.450        | 0.018 (0.008)    | 0.498 (0.209)    | 0 (0.000) |    17.20 | mantuu, misutaaa, raalz, refrezh, s0und |
|            3 |      683 | 2024-06-07 | Nexus         | W   | 0.932      | 0.500        | 0.011 (0.005)    | 0.432 (0.201)    | 0 (0.000) |    13.29 | mantuu, misutaaa, raalz, refrezh, s0und |
|            2 |      741 | 2024-06-06 | EYEBALLERS    | L   | 0.926      | -            | -                | -                | -         |    -9.60 | mantuu, misutaaa, raalz, refrezh, s0und |
|            1 |      778 | 2024-06-05 | Rebels        | L   | 0.921      | -            | -                | -                | -         |    -5.68 | mantuu, misutaaa, raalz, refrezh, s0und |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,498.72)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
