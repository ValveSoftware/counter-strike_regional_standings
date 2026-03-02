### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: b4rtiN, bsd, JOTA, NEKIZ, shz<br />
Global Rank: [161](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [34]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  782.4<br />
<br />
Final Rank Value (782.4) = Starting Rank Value (733.4) + Head To Head Adjustments (48.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.4
- 400 + ( ( 0.176 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 733.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     3257 | 2025-10-27 | LP             | L   | 0.362      | -            | -                | -                | -         |    -6.01 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           30 |     3304 | 2025-10-26 | Sharks         | L   | 0.355      | -            | -                | -                | -         |    -0.31 | bsd, horvy, JOTA, NEKIZ, shz  |
|           29 |     3421 | 2025-10-24 | Bounty Hunters | W   | 0.342      | 0.363        | 0.016 (0.002)    | 0.425 (0.053)    | 0 (0.000) |     6.77 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           28 |     3564 | 2025-10-19 | RED Canids     | W   | 0.309      | 0.363        | 0.050 (0.006)    | 0.676 (0.076)    | 0 (0.000) |     9.25 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           27 |     3581 | 2025-10-18 | Dusty Roots    | W   | 0.302      | 0.363        | 0.005 (0.001)    | 0.126 (0.014)    | 0 (0.000) |     4.55 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           26 |     3635 | 2025-10-16 | ODDIK          | W   | 0.289      | 0.363        | 0.051 (0.005)    | 0.529 (0.055)    | 0 (0.000) |     8.01 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           25 |     3647 | 2025-10-16 | Yawara         | L   | 0.287      | -            | -                | -                | -         |    -3.77 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           24 |     3672 | 2025-10-15 | Keyd Stars     | W   | 0.282      | 0.363        | 0.013 (0.001)    | 0.170 (0.017)    | 0 (0.000) |     5.35 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           23 |     3708 | 2025-10-14 | Fake do Biru   | W   | 0.275      | 0.363        | 0.010 (0.001)    | 0.368 (0.037)    | 0 (0.000) |     6.09 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           22 |     3838 | 2025-10-09 | Four Magic     | W   | 0.242      | 0.363        | -                | 0.183 (0.016)    | -         |     1.77 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           21 |     3887 | 2025-10-08 | ODDIK          | L   | 0.235      | -            | -                | -                | -         |    -0.85 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           20 |     4009 | 2025-10-06 | Galorys        | W   | 0.221      | 0.363        | 0.008 (0.001)    | 0.340 (0.027)    | -         |     4.42 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           19 |     4064 | 2025-10-05 | ELITES         | W   | 0.215      | -            | -                | -                | -         |     0.84 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           18 |     4160 | 2025-10-03 | Fake do Biru   | L   | 0.201      | -            | -                | -                | -         |    -1.87 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           17 |     4185 | 2025-10-02 | Imperial       | L   | 0.197      | -            | -                | -                | -         |    -0.33 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           16 |     4187 | 2025-10-02 | Fake do Biru   | W   | 0.196      | 0.333        | 0.010 (0.001)    | 0.368 (0.024)    | 1 (0.196) |     4.41 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           15 |     4263 | 2025-09-30 | ODDIK          | L   | 0.182      | -            | -                | -                | -         |    -0.62 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           14 |     4307 | 2025-09-29 | Imperial       | L   | 0.177      | -            | -                | -                | -         |    -0.29 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           13 |     4308 | 2025-09-29 | Keyd Stars     | W   | 0.176      | 0.390        | 0.013 (0.001)    | -                | 1 (0.176) |     3.41 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           12 |     4339 | 2025-09-28 | 9z             | W   | 0.170      | 0.390        | 0.044 (0.003)    | -                | 1 (0.170) |     3.70 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           11 |     4342 | 2025-09-28 | Yawara         | W   | 0.169      | 0.390        | -                | 0.264 (0.017)    | 1 (0.169) |     3.30 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|           10 |     4394 | 2025-09-27 | Sharks         | L   | 0.162      | -            | -                | -                | -         |    -0.10 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            9 |     4724 | 2025-09-17 | Galorys        | L   | 0.095      | -            | -                | -                | -         |    -1.04 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            8 |     4875 | 2025-09-13 | Fake do Biru   | L   | 0.067      | -            | -                | -                | -         |    -0.58 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            7 |     4907 | 2025-09-12 | ex-KRÜ         | W   | 0.062      | -            | -                | -                | -         |     0.78 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            6 |     4955 | 2025-09-11 | Yawara         | L   | 0.055      | -            | -                | -                | -         |    -0.66 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            5 |     5058 | 2025-09-09 | Fluxo          | W   | 0.042      | -            | -                | -                | -         |     1.20 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            4 |     5062 | 2025-09-09 | Keyd Stars     | W   | 0.041      | -            | -                | -                | -         |     0.80 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            3 |     5111 | 2025-09-08 | Four Magic     | W   | 0.035      | -            | -                | -                | -         |     0.27 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            2 |     5145 | 2025-09-07 | ex-KRÜ         | W   | 0.029      | -            | -                | -                | -         |     0.36 | b4rtiN, bsd, JOTA, NEKIZ, shz |
|            1 |     5210 | 2025-09-05 | Players        | W   | 0.013      | -            | -                | -                | -         |     0.08 | b4rtiN, bsd, JOTA, NEKIZ, shz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,972.62)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.309 | $8,000.00      | $2,470.23       |
| 2025-09-30 |      0.183 | $2,742.00      | $502.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
