### Roster Details<br />
Team Name: Fraud5<br />
Roster: cryths, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [155](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  699.5<br />
<br />
Final Rank Value (699.5) = Starting Rank Value (700.5) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.5
- 400 + ( ( 0.148 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 700.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      193 | 2024-06-10 | EXO        | L   | 1.000      | -            | -                | -                | -         |   -10.70 | cryths, Rezst, shyyne, Tree60, yz0      |
|           12 |      483 | 2024-06-05 | RAPTORS EC | W   | 1.000      | 0.282        | 0.001 (0.000)    | 0.051 (0.014)    | 0 (0.000) |    12.67 | cryths, Rezst, shyyne, Tree60, yz0      |
|           11 |     2299 | 2024-03-29 | EXO        | L   | 0.664      | -            | -                | -                | -         |    -7.04 | Adam9130, bevve, dobbo, eraa, Thomas    |
|           10 |     2482 | 2024-03-19 | RAPTORS EC | W   | 0.596      | 0.143        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     3.03 | CYPHER, eMy, ifan, Rhys, Ziimzey        |
|            9 |     2723 | 2024-03-09 | Insilio    | L   | 0.529      | -            | -                | -                | -         |    -3.30 | Rezst, shyyne, SLY, Tree60, yz0         |
|            8 |     2736 | 2024-03-09 | ex-Preasy  | L   | 0.527      | -            | -                | -                | -         |    -3.18 | Rezst, shyyne, SLY, Tree60, yz0         |
|            7 |     2746 | 2024-03-08 | MOUZ NXT   | L   | 0.522      | -            | -                | -                | -         |    -1.67 | Rezst, shyyne, SLY, Tree60, yz0         |
|            6 |     2808 | 2024-03-06 | Passion UA | L   | 0.508      | -            | -                | -                | -         |    -2.16 | Rezst, shyyne, SLY, Tree60, yz0         |
|            5 |     2860 | 2024-03-04 | Secret     | W   | 0.495      | 0.371        | 0.000 (0.000)    | 0.108 (0.020)    | 0 (0.000) |     5.21 | Rezst, shyyne, SLY, Tree60, yz0         |
|            4 |     3016 | 2024-02-25 | EXO        | L   | 0.442      | -            | -                | -                | -         |    -5.23 | Adam9130, bevve, dobbo, Extinct, smooya |
|            3 |     3044 | 2024-02-24 | EXO        | W   | 0.436      | 0.307        | 0.020 (0.003)    | 0.137 (0.018)    | 1 (0.436) |     8.70 | Rezst, shyyne, SLY, Tree60, yz0         |
|            2 |     4223 | 2024-01-09 | KOI        | L   | 0.129      | -            | -                | -                | -         |    -0.26 | dox, Rezst, shyyne, Tree60, yz0         |
|            1 |     4238 | 2024-01-09 | Nexus      | W   | 0.129      | 0.143        | 0.012 (0.000)    | 0.397 (0.007)    | 0 (0.000) |     2.96 | BTN, ERSIN, ragga, s0und, XELLOW        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,114.04)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $954.00        | $954.00         |
| 2024-03-29 |      0.664 | $951.00        | $631.10         |
| 2024-02-25 |      0.442 | $1,197.00      | $528.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
