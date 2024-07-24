### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, HENU, myltsi, podi, teme<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  733.5<br />
<br />
Final Rank Value (733.5) = Starting Rank Value (747.7) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.7
- 400 + ( ( 0.172 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 747.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1941 | 2024-05-06 | Permitta        | L   | 0.671      | -            | -                | -                | -         |    -5.58 | 2high, HENU, myltsi, podi, teme |
|           19 |     1952 | 2024-05-05 | Heimo           | L   | 0.666      | -            | -                | -                | -         |   -11.65 | 2high, HENU, myltsi, podi, teme |
|           18 |     1961 | 2024-05-05 | jefet           | W   | 0.665      | 0.306        | 0.001 (0.000)    | 0.025 (0.005)    | 0 (0.000) |     4.80 | 2high, HENU, myltsi, podi, teme |
|           17 |     1978 | 2024-05-04 | TMVG            | W   | 0.659      | 0.306        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     3.74 | 2high, HENU, myltsi, podi, teme |
|           16 |     1996 | 2024-05-03 | Nexus           | W   | 0.651      | 0.435        | 0.018 (0.005)    | 0.480 (0.136)    | 0 (0.000) |    13.01 | 2high, HENU, myltsi, podi, teme |
|           15 |     2026 | 2024-05-01 | Enterprise      | L   | 0.641      | -            | -                | -                | -         |    -5.97 | 2high, HENU, myltsi, podi, teme |
|           14 |     2046 | 2024-05-01 | Sampi           | L   | 0.638      | -            | -                | -                | -         |    -4.83 | HENU, myltsi, podi, S1rva, teme |
|           13 |     2064 | 2024-04-30 | Endpoint        | L   | 0.632      | -            | -                | -                | -         |    -5.66 | HENU, myltsi, podi, S1rva, teme |
|           12 |     2074 | 2024-04-29 | RUSH B          | L   | 0.627      | -            | -                | -                | -         |    -7.09 | HENU, myltsi, podi, S1rva, teme |
|           11 |     2105 | 2024-04-28 | Heimo           | L   | 0.618      | -            | -                | -                | -         |   -11.66 | HENU, myltsi, podi, S1rva, teme |
|           10 |     2237 | 2024-04-22 | ALTERNATE aTTaX | L   | 0.578      | -            | -                | -                | -         |    -4.79 | HENU, myltsi, podi, S1rva, teme |
|            9 |     2284 | 2024-04-20 | SINNERS         | W   | 0.566      | 0.371        | 0.048 (0.010)    | 0.769 (0.161)    | 0 (0.000) |    15.18 | HENU, myltsi, podi, S1rva, teme |
|            8 |     2339 | 2024-04-19 | Viperio         | L   | 0.557      | -            | -                | -                | -         |   -11.74 | HENU, myltsi, podi, S1rva, teme |
|            7 |     2387 | 2024-04-18 | MOUZ NXT        | L   | 0.552      | -            | -                | -                | -         |    -2.83 | HENU, myltsi, podi, S1rva, teme |
|            6 |     2449 | 2024-04-16 | 1WIN            | L   | 0.539      | -            | -                | -                | -         |    -5.03 | HENU, myltsi, podi, S1rva, teme |
|            5 |     2468 | 2024-04-15 | Sampi           | W   | 0.533      | 0.371        | 0.037 (0.007)    | 0.994 (0.196)    | 0 (0.000) |    12.23 | HENU, myltsi, podi, S1rva, teme |
|            4 |     2471 | 2024-04-15 | Viperio         | W   | 0.532      | 0.143        | 0.002 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     5.60 | HENU, myltsi, podi, S1rva, teme |
|            3 |     2544 | 2024-04-11 | Secret          | W   | 0.505      | 0.371        | 0.000 (0.000)    | 0.074 (0.014)    | 0 (0.000) |     4.00 | HENU, myltsi, podi, S1rva, teme |
|            2 |     3617 | 2024-02-24 | HAVU            | W   | 0.195      | 0.306        | 0.001 (0.000)    | 0.186 (0.011)    | 1 (0.195) |     2.93 | HENU, myltsi, podi, S1rva, teme |
|            1 |     3639 | 2024-02-24 | ex-sYnck        | W   | 0.192      | 0.306        | 0.000 (0.000)    | 0.023 (0.001)    | 1 (0.192) |     1.20 | HENU, myltsi, podi, S1rva, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,802.15)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-05 |      0.666 | $1,608.00      | $1,071.59       |
| 2024-02-24 |      0.195 | $3,748.00      | $730.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
