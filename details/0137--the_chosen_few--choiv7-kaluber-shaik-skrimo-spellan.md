### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  743.8<br />
<br />
Final Rank Value (743.8) = Starting Rank Value (700.8) + Head To Head Adjustments (43.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.8
- 400 + ( ( 0.148 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 700.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2561 | 2024-03-15 | Permitta        | L   | 0.569      | -            | -                | -                | -         |    -3.36 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     2591 | 2024-03-14 | Endpoint        | W   | 0.563      | 0.372        | 0.016 (0.003)    | 0.490 (0.103)    | 0 (0.000) |    12.85 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     2657 | 2024-03-12 | ARCRED          | W   | 0.549      | 0.372        | 0.048 (0.010)    | 0.346 (0.071)    | 0 (0.000) |    11.88 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     2717 | 2024-03-09 | Passion UA      | W   | 0.529      | 0.372        | 0.086 (0.017)    | 0.803 (0.158)    | 0 (0.000) |    14.14 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     2795 | 2024-03-06 | Insilio         | L   | 0.510      | -            | -                | -                | -         |    -3.25 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     2871 | 2024-03-03 | Metizport       | L   | 0.490      | -            | -                | -                | -         |    -2.62 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     2877 | 2024-03-03 | TSM             | W   | 0.489      | 0.143        | 0.007 (0.000)    | 0.127 (0.009)    | 0 (0.000) |     8.64 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     2883 | 2024-03-03 | KOI             | W   | 0.489      | 0.143        | 0.077 (0.005)    | 0.508 (0.035)    | 0 (0.000) |    14.51 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     3052 | 2024-02-24 | brazylijski luz | L   | 0.435      | -            | -                | -                | -         |    -4.81 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     3199 | 2024-02-17 | Entropiq        | L   | 0.390      | -            | -                | -                | -         |    -7.67 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     3204 | 2024-02-17 | kONO            | L   | 0.389      | -            | -                | -                | -         |    -4.10 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     3211 | 2024-02-17 | Monte           | L   | 0.388      | -            | -                | -                | -         |    -0.40 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     3357 | 2024-02-10 | ex-Anonymo      | W   | 0.343      | 0.358        | 0.000 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     3.93 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     3433 | 2024-02-04 | AIRLYA          | W   | 0.302      | 0.143        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     2.46 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     3454 | 2024-02-03 | Zero Tenacity   | L   | 0.297      | -            | -                | -                | -         |    -0.88 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     3495 | 2024-02-02 | NAVI Junior     | W   | 0.289      | 0.143        | 0.007 (0.000)    | 0.071 (0.003)    | 0 (0.000) |     4.70 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     3498 | 2024-02-02 | Juggernauts     | W   | 0.289      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.45 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     3502 | 2024-02-02 | NAVI Junior     | L   | 0.288      | -            | -                | -                | -         |    -4.44 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($476.83)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
