### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [54](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  1062.7<br />
<br />
Final Rank Value (1062.7) = Starting Rank Value (1044.1) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 0.222[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1044.1
- 400 + ( ( 0.305 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1044.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      316 | 2024-06-11 | Nemiga        | L   | 1.000      | -            | -                | -                | -         |    -8.38 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           22 |      338 | 2024-06-10 | CYBERSHOKE    | W   | 0.993      | 0.500        | 0.058 (0.029)    | 0.317 (0.158)    | 0 (0.000) |     7.70 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           21 |      369 | 2024-06-09 | Rebels        | W   | 0.987      | 0.500        | 0.053 (0.026)    | 0.551 (0.272)    | 0 (0.000) |    17.68 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           20 |      463 | 2024-06-08 | NAVI Junior   | W   | 0.979      | 0.500        | -                | 0.113 (0.055)    | 0 (0.000) |     2.29 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |      555 | 2024-06-06 | MOUZ NXT      | L   | 0.967      | -            | -                | -                | -         |   -10.63 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |      666 | 2024-06-04 | Endpoint      | W   | 0.954      | 0.500        | 0.017 (0.008)    | 0.524 (0.250)    | 0 (0.000) |    10.44 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |      865 | 2024-05-28 | Slovakia      | L   | 0.905      | -            | -                | -                | -         |   -18.09 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |      888 | 2024-05-27 | Endpoint      | W   | 0.899      | 0.435        | 0.017 (0.007)    | 0.524 (0.205)    | 0 (0.000) |     9.94 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |      930 | 2024-05-25 | Zero Tenacity | L   | 0.884      | -            | -                | -                | -         |   -11.88 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |      996 | 2024-05-22 | MOUZ NXT      | W   | 0.866      | 0.435        | 0.152 (0.057)    | 1.000 (0.376)    | 0 (0.000) |    14.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1033 | 2024-05-21 | B8            | L   | 0.860      | -            | -                | -                | -         |    -7.83 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1140 | 2024-05-18 | LEON          | W   | 0.838      | 0.143        | 0.010 (0.001)    | 0.167 (0.020)    | 0 (0.000) |     3.63 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1196 | 2024-05-16 | CPH Wolves    | W   | 0.827      | 0.143        | 0.006 (0.001)    | 0.197 (0.023)    | -         |     3.41 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     1255 | 2024-05-15 | EYEBALLERS    | W   | 0.818      | 0.143        | 0.009 (0.001)    | 0.646 (0.076)    | -         |     8.68 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     1355 | 2024-05-12 | AL QATRAO     | W   | 0.800      | 0.306        | 0.006 (0.001)    | 0.037 (0.009)    | 1 (0.800) |     4.10 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     1393 | 2024-05-11 | ALL-IN        | W   | 0.792      | -            | -                | -                | 1 (0.792) |     1.45 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     3012 | 2024-03-03 | Portugal      | L   | 0.334      | -            | -                | -                | -         |    -8.82 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     3039 | 2024-03-02 | AL QATRAO     | W   | 0.327      | 0.314        | 0.006 (0.001)    | -                | 1 (0.327) |     1.57 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     3570 | 2024-02-04 | SAW           | L   | 0.146      | -            | -                | -                | -         |    -1.03 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3592 | 2024-02-03 | Portugal      | W   | 0.140      | -            | -                | -                | -         |     0.72 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     3623 | 2024-02-02 | ABT           | W   | 0.134      | -            | -                | -                | -         |     0.17 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     3630 | 2024-02-02 | KOI           | L   | 0.133      | -            | -                | -                | -         |    -1.30 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     3632 | 2024-02-02 | OVERFRAG      | W   | 0.133      | -            | -                | -                | -         |     0.23 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,682.81)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      1.000 | $25,000.00     | $24,987.63      |
| 2024-05-12 |      0.800 | $2,693.00      | $2,153.13       |
| 2024-03-03 |      0.334 | $1,625.00      | $542.05         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
