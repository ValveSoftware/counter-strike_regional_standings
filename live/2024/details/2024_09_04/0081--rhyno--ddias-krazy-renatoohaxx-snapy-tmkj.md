### Roster Details<br />
Team Name: Rhyno<br />
Roster: DDias, krazy, renatoohaxx, snapy, TMKj<br />
Global Rank: [81](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [59]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  926.6<br />
<br />
Final Rank Value (926.6) = Starting Rank Value (875.1) + Head To Head Adjustments (51.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.1
- 400 + ( ( 0.240 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 875.1


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
|           16 |     2214 | 2024-06-11 | Nemiga        | L   | 0.633      | -            | -                | -                | -         |    -4.29 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     2236 | 2024-06-10 | CYBERSHOKE    | W   | 0.627      | 0.500        | 0.037 (0.012)    | 0.652 (0.204)    | 0 (0.000) |     9.74 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     2267 | 2024-06-09 | Rebels        | W   | 0.621      | 0.500        | 0.029 (0.009)    | 0.639 (0.198)    | 0 (0.000) |    11.22 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     2361 | 2024-06-08 | NAVI Junior   | W   | 0.612      | 0.500        | 0.001 (0.000)    | 0.074 (0.023)    | 0 (0.000) |     4.68 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     2453 | 2024-06-06 | MOUZ NXT      | L   | 0.601      | -            | -                | -                | -         |    -5.71 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     2564 | 2024-06-04 | Endpoint      | W   | 0.588      | 0.500        | 0.063 (0.018)    | 0.689 (0.203)    | 0 (0.000) |    11.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2763 | 2024-05-28 | Sampi         | L   | 0.539      | -            | -                | -                | -         |    -8.31 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2786 | 2024-05-27 | Endpoint      | W   | 0.533      | 0.435        | 0.063 (0.015)    | 0.689 (0.160)    | 0 (0.000) |    10.82 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     2828 | 2024-05-25 | Zero Tenacity | L   | 0.518      | -            | -                | -                | -         |    -4.61 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     2894 | 2024-05-22 | MOUZ NXT      | W   | 0.499      | 0.435        | 0.112 (0.024)    | 0.853 (0.185)    | 0 (0.000) |    10.04 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     2931 | 2024-05-21 | B8            | L   | 0.494      | -            | -                | -                | -         |    -3.77 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     3038 | 2024-05-18 | LEON          | W   | 0.472      | 0.143        | 0.005 (0.000)    | 0.086 (0.006)    | 0 (0.000) |     3.32 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3094 | 2024-05-16 | CPH Wolves    | W   | 0.460      | 0.143        | 0.003 (0.000)    | 0.483 (0.032)    | 0 (0.000) |     5.18 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     3153 | 2024-05-15 | EYEBALLERS    | W   | 0.452      | 0.143        | 0.003 (0.000)    | 0.624 (0.040)    | -         |     7.03 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     3253 | 2024-05-12 | AL QATRAO     | W   | 0.433      | 0.306        | 0.002 (0.000)    | 0.016 (0.002)    | 1 (0.433) |     2.94 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     3291 | 2024-05-11 | ALL-IN        | W   | 0.425      | -            | -                | -                | 1 (0.425) |     1.61 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,997.22)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.633 | $25,000.00     | $15,830.50      |
| 2024-05-12 |      0.433 | $2,693.00      | $1,166.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
