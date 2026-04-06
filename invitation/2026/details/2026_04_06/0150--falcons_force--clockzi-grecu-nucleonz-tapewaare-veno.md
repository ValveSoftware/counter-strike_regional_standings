### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, NucleonZ, Tapewaare, VENO<br />
Global Rank: [150](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [105]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  878.7<br />
<br />
Final Rank Value (878.7) = Starting Rank Value (851.4) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.420[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 851.4
- 400 + ( ( 0.231 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 851.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      164 | 2026-04-02 | B8             | L   | 1.000      | -            | -                | -                | -         |    -0.98 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           14 |      184 | 2026-04-01 | AaB            | W   | 1.000      | 0.340        | 0.002 (0.001)    | 0.706 (0.240)    | 1 (1.000) |    26.74 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           13 |      212 | 2026-04-01 | WAZABI         | W   | 1.000      | 0.340        | 0.000 (0.000)    | 0.092 (0.031)    | 1 (1.000) |    11.00 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           12 |      226 | 2026-04-01 | B8             | L   | 1.000      | -            | -                | -                | -         |    -0.75 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           11 |      251 | 2026-03-31 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -1.65 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           10 |      277 | 2026-03-31 | Sashi Academy  | W   | 1.000      | 0.340        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (1.000) |     3.31 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            9 |      287 | 2026-03-31 | 3DMAX          | L   | 1.000      | -            | -                | -                | -         |    -0.80 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            8 |      293 | 2026-03-31 | atputies       | W   | 1.000      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.44 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            7 |      297 | 2026-03-31 | AaB            | L   | 1.000      | -            | -                | -                | -         |    -4.67 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            6 |     1749 | 2026-03-02 | JiJieHao       | L   | 0.965      | -            | -                | -                | -         |    -5.35 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            5 |     4812 | 2025-11-07 | MOUZ NXT       | L   | 0.200      | -            | -                | -                | -         |    -0.52 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            4 |     4827 | 2025-11-07 | ex-FUT Academy | L   | 0.200      | -            | -                | -                | -         |    -5.08 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            3 |     4844 | 2025-11-07 | EYEBALLERS     | L   | 0.200      | -            | -                | -                | -         |    -0.29 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            2 |     4858 | 2025-11-07 | MASONIC        | W   | 0.199      | 0.335        | 0.002 (0.000)    | 0.519 (0.035)    | 1 (0.199) |     5.33 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            1 |     4872 | 2025-11-07 | ENCE           | L   | 0.199      | -            | -                | -                | -         |    -1.37 | clockzi, grecu, NucleonZ, Olaie, VENO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,154.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-02 |      1.000 | $1,154.00      | $1,154.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
