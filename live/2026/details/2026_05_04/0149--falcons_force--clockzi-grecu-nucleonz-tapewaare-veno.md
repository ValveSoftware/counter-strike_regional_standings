### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, NucleonZ, Tapewaare, VENO<br />
Global Rank: [149](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [99]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  878.4<br />
<br />
Final Rank Value (878.4) = Starting Rank Value (838.8) + Head To Head Adjustments (39.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.397[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 838.8
- 400 + ( ( 0.236 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 838.8


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
|           16 |      135 | 2026-04-29 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -2.63 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           15 |     1121 | 2026-04-02 | B8             | L   | 0.985      | -            | -                | -                | -         |    -0.81 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           14 |     1150 | 2026-04-01 | AaB            | W   | 0.981      | 0.340        | 0.014 (0.005)    | 0.847 (0.283)    | 1 (0.981) |    26.52 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           13 |     1196 | 2026-04-01 | WAZABI         | W   | 0.979      | 0.340        | 0.004 (0.001)    | 0.199 (0.066)    | 1 (0.979) |    21.23 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           12 |     1214 | 2026-04-01 | B8             | L   | 0.978      | -            | -                | -                | -         |    -0.59 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           11 |     1249 | 2026-03-31 | BESTIA         | L   | 0.974      | -            | -                | -                | -         |    -1.73 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|           10 |     1282 | 2026-03-31 | Sashi Academy  | W   | 0.972      | 0.340        | 0.000 (0.000)    | 0.033 (0.011)    | 1 (0.972) |     3.29 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            9 |     1294 | 2026-03-31 | 3DMAX          | L   | 0.972      | -            | -                | -                | -         |    -0.45 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            8 |     1301 | 2026-03-31 | atputies       | W   | 0.972      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.972) |     2.48 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            7 |     1306 | 2026-03-31 | AaB            | L   | 0.972      | -            | -                | -                | -         |    -3.96 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            6 |     2845 | 2026-03-02 | JiJieHao       | L   | 0.778      | -            | -                | -                | -         |    -3.53 | clockzi, grecu, NucleonZ, Tapewaare, VENO |
|            5 |     5909 | 2025-11-07 | MOUZ NXT       | L   | 0.013      | -            | -                | -                | -         |    -0.06 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            4 |     5924 | 2025-11-07 | ex-FUT Academy | L   | 0.013      | -            | -                | -                | -         |    -0.34 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            3 |     5941 | 2025-11-07 | EYEBALLERS     | L   | 0.013      | -            | -                | -                | -         |    -0.01 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            2 |     5955 | 2025-11-07 | MASONIC        | W   | 0.012      | 0.335        | 0.005 (0.000)    | 0.549 (0.002)    | 1 (0.012) |     0.33 | clockzi, grecu, NucleonZ, Olaie, VENO     |
|            1 |     5969 | 2025-11-07 | ENCE           | L   | 0.012      | -            | -                | -                | -         |    -0.14 | clockzi, grecu, NucleonZ, Olaie, VENO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,139.60)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-02 |      0.988 | $1,154.00      | $1,139.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
