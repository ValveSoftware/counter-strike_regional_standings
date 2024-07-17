### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  728.0<br />
<br />
Final Rank Value (728.0) = Starting Rank Value (700.9) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.9
- 400 + ( ( 0.140 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 700.9


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
|           18 |     2858 | 2024-03-15 | Permitta        | L   | 0.373      | -            | -                | -                | -         |    -2.12 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     2888 | 2024-03-14 | Endpoint        | W   | 0.368      | 0.372        | 0.018 (0.002)    | 0.498 (0.068)    | 0 (0.000) |     8.67 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     2954 | 2024-03-12 | ARCRED          | W   | 0.354      | 0.372        | 0.057 (0.008)    | 0.354 (0.047)    | 0 (0.000) |     8.26 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     3014 | 2024-03-09 | Passion UA      | W   | 0.334      | 0.372        | 0.087 (0.011)    | 0.847 (0.105)    | 0 (0.000) |     8.99 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     3092 | 2024-03-06 | Insilio         | L   | 0.314      | -            | -                | -                | -         |    -1.96 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     3168 | 2024-03-03 | Metizport       | L   | 0.295      | -            | -                | -                | -         |    -1.70 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     3174 | 2024-03-03 | TSM             | W   | 0.294      | 0.143        | 0.009 (0.000)    | 0.083 (0.003)    | 0 (0.000) |     5.06 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     3180 | 2024-03-03 | KOI             | W   | 0.294      | 0.143        | 0.091 (0.004)    | 0.448 (0.019)    | 0 (0.000) |     8.73 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     3349 | 2024-02-24 | brazylijski luz | L   | 0.240      | -            | -                | -                | -         |    -2.33 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     3496 | 2024-02-17 | Entropiq        | L   | 0.195      | -            | -                | -                | -         |    -4.05 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     3501 | 2024-02-17 | kONO            | L   | 0.193      | -            | -                | -                | -         |    -1.76 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     3508 | 2024-02-17 | Monte           | L   | 0.193      | -            | -                | -                | -         |    -0.52 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     3654 | 2024-02-10 | ex-Anonymo      | W   | 0.148      | 0.358        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.72 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     3730 | 2024-02-04 | North Macedonia | W   | 0.107      | 0.143        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     0.82 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     3751 | 2024-02-03 | Zero Tenacity   | L   | 0.101      | -            | -                | -                | -         |    -0.30 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     3792 | 2024-02-02 | NAVI Junior     | W   | 0.094      | 0.143        | 0.006 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     1.54 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     3795 | 2024-02-02 | Juggernauts     | W   | 0.093      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.46 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     3799 | 2024-02-02 | NAVI Junior     | L   | 0.093      | -            | -                | -                | -         |    -1.40 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($330.37)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
