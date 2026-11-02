### Roster Details<br />
Team Name: Lavked<br />
Roster: 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd<br />
Global Rank: [198](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [138]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  713.8<br />
<br />
Final Rank Value (713.8) = Starting Rank Value (693.3) + Head To Head Adjustments (20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.3
- 400 + ( ( 0.157 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 693.3


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
|           42 |     3562 | 2026-08-06 | Black Phoenix    | L   | 0.612      | -            | -                | -                | -         |    -1.09 | 1NVISIBLEE, KENSI, solb, takanashi, xm1nd |
|           41 |     3724 | 2026-07-31 | megoshort        | L   | 0.573      | -            | -                | -                | -         |    -9.55 | 1NVISIBLEE, 7tetsu, KENSI, solb, xm1nd    |
|           40 |     3742 | 2026-07-31 | PRIVATE          | L   | 0.571      | -            | -                | -                | -         |    -0.57 | 1NVISIBLEE, 7tetsu, KENSI, solb, xm1nd    |
|           39 |     3763 | 2026-07-30 | Phantom          | L   | 0.566      | -            | -                | -                | -         |    -0.82 | 1NVISIBLEE, KENSI, L1nkero, solb, xm1nd   |
|           38 |     3812 | 2026-07-28 | UPGRADE          | L   | 0.554      | -            | -                | -                | -         |    -1.11 | 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd  |
|           37 |     3827 | 2026-07-28 | K28              | L   | 0.552      | -            | -                | -                | -         |   -10.66 | 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd  |
|           36 |     3834 | 2026-07-28 | Nemiga           | L   | 0.551      | -            | -                | -                | -         |    -0.09 | 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd  |
|           35 |     3838 | 2026-07-28 | FIN              | W   | 0.551      | -            | -                | -                | 1 (0.551) |     2.29 | 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd  |
|           34 |     3877 | 2026-07-26 | Butterfly        | W   | 0.541      | 0.435        | 0.023 (0.005)    | 0.550 (0.129)    | 0 (0.000) |    12.90 | 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd  |
|           33 |     3994 | 2026-07-23 | ex-RUSTEC        | W   | 0.519      | 0.435        | 0.019 (0.004)    | 1.000 (0.226)    | 0 (0.000) |    11.96 | 1NVISIBLEE, KENSI, riskyb0b, solb, xm1nd  |
|           32 |     4200 | 2026-07-15 | Just Players     | L   | 0.465      | -            | -                | -                | -         |    -4.26 | 1NVISIBLEE, KENSI, L1nkero, solb, xm1nd   |
|           31 |     4317 | 2026-07-09 | illwill          | W   | 0.426      | -            | -                | -                | 0 (0.000) |     3.56 | 1NVISIBLEE, KENSI, Norwi, solb, xm1nd     |
|           30 |     4345 | 2026-07-06 | Just Players     | L   | 0.405      | -            | -                | -                | -         |    -3.61 | 1NVISIBLEE, KENSI, Norwi, solb, xm1nd     |
|           29 |     4655 | 2026-06-17 | Acend            | L   | 0.278      | -            | -                | -                | -         |    -0.90 | 1NVISIBLEE, k4nfuz, KENSI, solb, xm1nd    |
|           28 |     4842 | 2026-06-09 | Misa             | W   | 0.225      | 0.371        | -                | 0.118 (0.010)    | 0 (0.000) |     1.96 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           27 |     4952 | 2026-06-05 | Illyrians        | W   | 0.199      | 0.371        | 0.019 (0.001)    | 0.749 (0.055)    | 0 (0.000) |     4.32 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           26 |     4991 | 2026-06-03 | Color            | L   | 0.186      | -            | -                | -                | -         |    -1.61 | 1NVISIBLEE, k4nfuz, L1nkero, solb, xm1nd  |
|           25 |     5013 | 2026-06-02 | ASTRAL           | W   | 0.180      | 0.384        | 0.003 (0.000)    | 0.302 (0.021)    | 0 (0.000) |     4.98 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           24 |     5030 | 2026-06-01 | KOLESIE          | L   | 0.174      | -            | -                | -                | -         |    -2.65 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           23 |     5127 | 2026-05-29 | HEROIC Academy   | W   | 0.153      | -            | -                | -                | 0 (0.000) |     1.14 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           22 |     5144 | 2026-05-29 | Nemesis          | L   | 0.152      | -            | -                | -                | -         |    -0.07 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           21 |     5241 | 2026-05-27 | Rune Eaters      | W   | 0.138      | 0.384        | 0.033 (0.002)    | 0.411 (0.022)    | 0 (0.000) |     3.93 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           20 |     5302 | 2026-05-25 | Phantom          | L   | 0.126      | -            | -                | -                | -         |    -0.16 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           19 |     5344 | 2026-05-24 | fnatic           | W   | 0.119      | 0.435        | 0.105 (0.005)    | 0.732 (0.038)    | 0 (0.000) |     3.70 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           18 |     5449 | 2026-05-22 | HEROIC Academy   | W   | 0.105      | -            | -                | -                | -         |     0.81 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           17 |     5527 | 2026-05-20 | ex-Zero Tenacity | W   | 0.093      | 0.435        | 0.047 (0.002)    | 1.000 (0.040)    | -         |     2.29 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           16 |     5554 | 2026-05-19 | DragonClaw       | L   | 0.086      | -            | -                | -                | -         |    -1.43 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           15 |     5619 | 2026-05-16 | 1win             | L   | 0.066      | -            | -                | -                | -         |    -0.01 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           14 |     5650 | 2026-05-15 | Nemiga           | L   | 0.060      | -            | -                | -                | -         |    -0.01 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           13 |     5660 | 2026-05-15 | fnatic           | W   | 0.059      | 0.384        | 0.105 (0.002)    | 0.732 (0.016)    | -         |     1.82 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           12 |     5678 | 2026-05-14 | Nuclear TigeRES  | L   | 0.053      | -            | -                | -                | -         |    -0.08 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           11 |     5681 | 2026-05-14 | los kogutos      | W   | 0.052      | -            | -                | -                | -         |     0.41 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|           10 |     5711 | 2026-05-13 | 100 Thieves      | W   | 0.046      | 0.384        | 0.174 (0.003)    | 0.786 (0.014)    | -         |     1.42 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            9 |     5738 | 2026-05-12 | MOUZ NXT         | W   | 0.041      | -            | -                | -                | -         |     0.30 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            8 |     5779 | 2026-05-11 | GenOne           | W   | 0.034      | 0.384        | 0.037 (0.000)    | -                | -         |     1.01 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            7 |     5818 | 2026-05-10 | SPARTA           | W   | 0.027      | -            | -                | -                | -         |     0.57 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            6 |     5828 | 2026-05-10 | 1win             | L   | 0.026      | -            | -                | -                | -         |    -0.01 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            5 |     5877 | 2026-05-08 | Sashi            | L   | 0.014      | -            | -                | -                | -         |    -0.23 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            4 |     5879 | 2026-05-08 | Alliance         | L   | 0.013      | -            | -                | -                | -         |    -0.01 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            3 |     5898 | 2026-05-07 | MOUZ NXT         | W   | 0.007      | -            | -                | -                | -         |     0.05 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            2 |     5911 | 2026-05-06 | The Last Resort  | W   | 0.001      | -            | -                | -                | -         |     0.03 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |
|            1 |     5913 | 2026-05-06 | UNiTY            | W   | 0.000      | -            | -                | -                | -         |     0.00 | 1NVISIBLEE, Djon8, k4nfuz, solb, xm1nd    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($301.46)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-15 |      0.060 | $5,000.00      | $301.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
