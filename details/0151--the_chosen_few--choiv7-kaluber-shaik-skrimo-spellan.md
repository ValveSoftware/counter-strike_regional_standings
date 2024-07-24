### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [151](../standings_global.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
Final Rank Value:  703.4<br />
<br />
Final Rank Value (703.4) = Starting Rank Value (680.6) + Head To Head Adjustments (22.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.6
- 400 + ( ( 0.139 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 680.6


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
|           18 |     3146 | 2024-03-15 | Permitta        | L   | 0.326      | -            | -                | -                | -         |    -1.93 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     3176 | 2024-03-14 | Endpoint        | W   | 0.320      | 0.372        | 0.015 (0.002)    | 0.466 (0.056)    | 0 (0.000) |     7.54 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     3242 | 2024-03-12 | ARCRED          | W   | 0.307      | 0.372        | 0.048 (0.006)    | 0.329 (0.038)    | 0 (0.000) |     6.91 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     3302 | 2024-03-09 | Passion UA      | W   | 0.287      | 0.372        | 0.163 (0.017)    | 1.000 (0.107)    | 0 (0.000) |     8.12 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     3380 | 2024-03-06 | Insilio         | L   | 0.267      | -            | -                | -                | -         |    -1.83 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     3456 | 2024-03-03 | Metizport       | L   | 0.248      | -            | -                | -                | -         |    -1.57 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     3462 | 2024-03-03 | TSM             | W   | 0.247      | 0.143        | 0.008 (0.000)    | 0.066 (0.002)    | 0 (0.000) |     4.04 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     3468 | 2024-03-03 | KOI             | W   | 0.246      | 0.143        | 0.076 (0.003)    | 0.404 (0.014)    | 0 (0.000) |     7.16 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     3637 | 2024-02-24 | brazylijski luz | L   | 0.192      | -            | -                | -                | -         |    -1.91 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     3784 | 2024-02-17 | Entropiq        | L   | 0.148      | -            | -                | -                | -         |    -3.06 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     3789 | 2024-02-17 | kONO            | L   | 0.146      | -            | -                | -                | -         |    -1.43 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     3796 | 2024-02-17 | Monte           | L   | 0.145      | -            | -                | -                | -         |    -0.51 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     3942 | 2024-02-10 | ex-Anonymo      | W   | 0.101      | 0.358        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.54 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     4018 | 2024-02-04 | North Macedonia | W   | 0.060      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.48 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     4039 | 2024-02-03 | Zero Tenacity   | L   | 0.054      | -            | -                | -                | -         |    -0.15 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     4080 | 2024-02-02 | NAVI Junior     | W   | 0.046      | 0.143        | 0.005 (0.000)    | 0.042 (0.000)    | 0 (0.000) |     0.77 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     4083 | 2024-02-02 | Juggernauts     | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.25 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     4087 | 2024-02-02 | NAVI Junior     | L   | 0.045      | -            | -                | -                | -         |    -0.68 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($294.95)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
