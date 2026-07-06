### Roster Details<br />
Team Name: Just Players<br />
Roster: rexxie, shady, Something, spirit, sstiNiX<br />
Global Rank: [235](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  684.1<br />
<br />
Final Rank Value (684.1) = Starting Rank Value (660.8) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.8
- 400 + ( ( 0.138 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 660.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     2466 | 2026-04-05 | INOX Division    | L   | 0.588      | -            | -                | -                | -         |    -4.61 | rexxie, shady, Something, spirit, sstiNiX |
|           34 |     2534 | 2026-04-04 | yngods           | W   | 0.581      | 0.384        | 0.000 (0.000)    | 0.193 (0.043)    | 0 (0.000) |    10.08 | rexxie, shady, Something, spirit, sstiNiX |
|           33 |     2615 | 2026-04-03 | los kogutos      | L   | 0.574      | -            | -                | -                | -         |    -3.96 | rexxie, shady, Something, spirit, sstiNiX |
|           32 |     2805 | 2026-04-01 | Ursa             | W   | 0.561      | 0.384        | 0.013 (0.003)    | 0.903 (0.195)    | 0 (0.000) |    14.91 | rexxie, shady, Something, spirit, sstiNiX |
|           31 |     2987 | 2026-03-30 | IDoPieca         | W   | 0.548      | -            | -                | -                | 0 (0.000) |     5.33 | rexxie, shady, Something, spirit, sstiNiX |
|           30 |     3709 | 2026-03-18 | Leo              | L   | 0.466      | -            | -                | -                | -         |    -4.98 | demente, KusMe, shady, Something, spirit  |
|           29 |     3797 | 2026-03-16 | rottweilers      | L   | 0.453      | -            | -                | -                | -         |    -9.49 | demente, KusMe, shady, Something, spirit  |
|           28 |     4934 | 2026-02-21 | Bebop            | L   | 0.301      | -            | -                | -                | -         |    -3.32 | KusMe, Something, spirit, sstiNiX, swetsi |
|           27 |     5046 | 2026-02-19 | ex-Zero Tenacity | W   | 0.286      | 0.435        | 0.002 (0.000)    | 0.879 (0.109)    | 0 (0.000) |     5.97 | KusMe, Something, spirit, sstiNiX, swetsi |
|           26 |     5164 | 2026-02-17 | Hashiras         | L   | 0.273      | -            | -                | -                | -         |    -3.51 | KusMe, Something, spirit, sstiNiX, swetsi |
|           25 |     5204 | 2026-02-16 | WW               | L   | 0.267      | -            | -                | -                | -         |    -1.02 | KusMe, shady, Something, spirit, sstiNiX  |
|           24 |     5237 | 2026-02-15 | Persona Grata    | W   | 0.262      | 0.384        | -                | 0.223 (0.022)    | 0 (0.000) |     3.29 | KusMe, shady, Something, spirit, sstiNiX  |
|           23 |     5277 | 2026-02-15 | Omega            | L   | 0.259      | -            | -                | -                | -         |    -0.64 | KusMe, Something, spirit, sstiNiX, swetsi |
|           22 |     5318 | 2026-02-14 | HAVU             | L   | 0.253      | -            | -                | -                | -         |    -2.26 | KusMe, shady, Something, spirit, sstiNiX  |
|           21 |     5375 | 2026-02-13 | home             | W   | 0.246      | -            | -                | -                | 0 (0.000) |     2.23 | KusMe, shady, Something, spirit, sstiNiX  |
|           20 |     5657 | 2026-02-04 | BetBoom          | L   | 0.187      | -            | -                | -                | -         |    -0.02 | KusMe, shady, Something, spirit, sstiNiX  |
|           19 |     5711 | 2026-02-02 | Persona Grata    | W   | 0.175      | 0.435        | -                | 0.223 (0.017)    | 0 (0.000) |     2.24 | KusMe, shady, Something, spirit, sstiNiX  |
|           18 |     5748 | 2026-02-01 | ex-RUBY          | L   | 0.167      | -            | -                | -                | -         |    -1.07 | KusMe, shady, Something, spirit, sstiNiX  |
|           17 |     5771 | 2026-01-31 | SPARTA           | L   | 0.162      | -            | -                | -                | -         |    -0.49 | KusMe, shady, Something, spirit, sstiNiX  |
|           16 |     5779 | 2026-01-31 | DONSTU           | W   | 0.161      | 0.333        | 0.001 (0.000)    | 0.551 (0.030)    | 1 (0.161) |     2.72 | KusMe, shady, Something, spirit, sstiNiX  |
|           15 |     5799 | 2026-01-31 | SPARTA           | L   | 0.159      | -            | -                | -                | -         |    -0.47 | KusMe, shady, Something, spirit, sstiNiX  |
|           14 |     5857 | 2026-01-29 | Metizport        | W   | 0.146      | 0.435        | 0.028 (0.002)    | 0.465 (0.029)    | 0 (0.000) |     4.24 | KusMe, shady, Something, spirit, sstiNiX  |
|           13 |     5904 | 2026-01-27 | FAVBET           | W   | 0.133      | 0.435        | 0.009 (0.001)    | 0.345 (0.020)    | 0 (0.000) |     2.83 | KusMe, shady, Something, spirit, sstiNiX  |
|           12 |     5918 | 2026-01-26 | DragonClaw       | L   | 0.127      | -            | -                | -                | -         |    -0.89 | KusMe, shady, Something, spirit, sstiNiX  |
|           11 |     5957 | 2026-01-24 | rottweilers      | W   | 0.115      | -            | -                | -                | -         |     1.25 | KusMe, shady, Something, spirit, sstiNiX  |
|           10 |     6052 | 2026-01-22 | Eternal Fire     | W   | 0.102      | -            | -                | -                | -         |     1.04 | demente, KusMe, shady, Something, spirit  |
|            9 |     6077 | 2026-01-22 | Phantom          | L   | 0.100      | -            | -                | -                | -         |    -1.78 | demente, KusMe, shady, Something, spirit  |
|            8 |     6081 | 2026-01-22 | Acend            | L   | 0.099      | -            | -                | -                | -         |    -0.04 | demente, KusMe, shady, Something, spirit  |
|            7 |     6108 | 2026-01-21 | MASONIC          | W   | 0.094      | 0.384        | 0.011 (0.000)    | 0.498 (0.018)    | -         |     2.77 | demente, KusMe, shady, Something, spirit  |
|            6 |     6135 | 2026-01-20 | Sangal           | L   | 0.087      | -            | -                | -                | -         |    -1.46 | demente, KusMe, shady, Something, spirit  |
|            5 |     6145 | 2026-01-19 | Nemesis          | L   | 0.081      | -            | -                | -                | -         |    -0.17 | demente, KusMe, shady, Something, spirit  |
|            4 |     6187 | 2026-01-18 | MASONIC          | L   | 0.072      | -            | -                | -                | -         |    -0.15 | demente, KusMe, shady, Something, spirit  |
|            3 |     6218 | 2026-01-17 | los kogutos      | W   | 0.067      | 0.384        | 0.019 (0.000)    | 0.945 (0.024)    | -         |     1.73 | demente, KusMe, shady, Something, spirit  |
|            2 |     6325 | 2026-01-15 | ARCRED           | W   | 0.054      | 0.384        | 0.021 (0.000)    | -                | -         |     1.58 | demente, KusMe, shady, Something, spirit  |
|            1 |     6359 | 2026-01-14 | STATE            | W   | 0.046      | 0.384        | 0.020 (0.000)    | -                | -         |     1.38 | demente, KusMe, shady, Something, spirit  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($460.83)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.614 | $750.00        | $460.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
