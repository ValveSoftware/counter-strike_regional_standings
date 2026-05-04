### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1<br />
Global Rank: [104](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [70]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1049.3<br />
<br />
Final Rank Value (1049.3) = Starting Rank Value (956.5) + Head To Head Adjustments (92.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.490[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.5
- 400 + ( ( 0.300 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 956.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2370 | 2026-03-11 | K27             | L   | 0.840      | -            | -                | -                | -         |    -3.75 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           14 |     2484 | 2026-03-09 | 1win            | W   | 0.825      | 0.371        | 0.089 (0.027)    | 0.608 (0.186)    | 1 (0.825) |    20.24 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           13 |     2492 | 2026-03-09 | Nuclear TigeRES | W   | 0.824      | 0.371        | 0.046 (0.014)    | 0.733 (0.224)    | 1 (0.824) |    19.55 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           12 |     2628 | 2026-03-06 | SPARTA          | L   | 0.807      | -            | -                | -                | -         |    -5.89 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           11 |     2642 | 2026-03-06 | Nuclear TigeRES | W   | 0.806      | 0.333        | 0.046 (0.012)    | 0.733 (0.197)    | 1 (0.806) |    19.96 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           10 |     2655 | 2026-03-05 | WW              | L   | 0.802      | -            | -                | -                | -         |    -8.43 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            9 |     2665 | 2026-03-05 | SPARTA          | W   | 0.801      | 0.333        | 0.063 (0.017)    | 0.768 (0.205)    | 1 (0.801) |    19.41 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            8 |     2742 | 2026-03-04 | ARCRED          | W   | 0.793      | 0.333        | 0.023 (0.006)    | 0.657 (0.174)    | 1 (0.793) |    17.92 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            7 |     2754 | 2026-03-04 | Oxuji           | W   | 0.792      | 0.333        | 0.008 (0.002)    | 0.514 (0.136)    | 1 (0.792) |    15.81 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|            6 |     4900 | 2025-12-20 | Phantom         | L   | 0.301      | -            | -                | -                | -         |    -1.41 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            5 |     5070 | 2025-12-09 | Johnny Speeds   | L   | 0.225      | -            | -                | -                | -         |    -0.69 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            4 |     5089 | 2025-12-08 | magic           | L   | 0.218      | -            | -                | -                | -         |    -1.89 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            3 |     5130 | 2025-12-06 | FORZE Reload    | W   | 0.206      | 0.371        | 0.001 (0.000)    | 0.191 (0.015)    | 0 (0.000) |     1.45 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            2 |     5199 | 2025-12-03 | CPH Wolves      | W   | 0.186      | 0.371        | 0.000 (0.000)    | 0.038 (0.003)    | 0 (0.000) |     0.54 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            1 |     6010 | 2025-11-06 | FAVBET          | L   | 0.005      | -            | -                | -                | -         |    -0.10 | AquaRS, F0R3VER, lasfas, ProbLeM, TriBorgg1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,040.80)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-06 |      0.808 | $1,000.00      | $808.49         |
| 2025-12-10 |      0.232 | $1,000.00      | $232.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
