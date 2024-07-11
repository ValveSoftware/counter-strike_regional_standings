### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, chawzyyy, Ro1f, SHiNE, spooke<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [27](../standings_global.md)<br />
Regional Rank: [18]( ../standings_europe.md)<br />
Final Rank Value:  1310.7<br />
<br />
Final Rank Value (1310.7) = Starting Rank Value (1395.1) + Head To Head Adjustments (-84.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.759[<sup>2</sup>](#table1)

The average of these factors is 0.472<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1395.1
- 400 + ( ( 0.472 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1395.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       27 | 2024-07-10 | Sashi           | W   | 1.000      | 0.358        | 0.202 (0.072)    | 1.000 (0.358)    | 0 (0.000) |    13.20 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           37 |       29 | 2024-07-10 | Endpoint        | W   | 1.000      | 0.358        | -                | 0.524 (0.188)    | 0 (0.000) |     3.08 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           36 |       50 | 2024-07-09 | 9INE            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.26 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           35 |       52 | 2024-07-09 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -29.07 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           34 |       75 | 2024-07-07 | lajtbitexe      | W   | 1.000      | -            | -                | -                | -         |     1.23 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           33 |       83 | 2024-07-05 | kONO            | W   | 1.000      | 0.333        | 0.041 (0.014)    | 0.569 (0.190)    | -         |     3.27 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           32 |       93 | 2024-06-30 | Young Gods      | W   | 1.000      | -            | -                | -                | -         |     1.22 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           31 |      115 | 2024-06-27 | Revenant        | W   | 1.000      | 0.333        | 0.035 (0.012)    | 0.285 (0.095)    | -         |     2.05 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           30 |      119 | 2024-06-25 | Revenant        | W   | 1.000      | 0.333        | 0.035 (0.012)    | -                | -         |     1.98 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |      126 | 2024-06-23 | los kogutos     | W   | 1.000      | -            | -                | -                | -         |     0.19 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |      194 | 2024-06-15 | Lilmix          | W   | 1.000      | 0.377        | 0.034 (0.013)    | -                | 1 (1.000) |     3.10 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |      234 | 2024-06-14 | Lilmix          | W   | 1.000      | 0.377        | 0.034 (0.013)    | -                | 1 (1.000) |     3.05 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           26 |      276 | 2024-06-13 | Kappa Bar       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.52 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |      375 | 2024-06-09 | Alliance        | W   | 0.987      | 0.347        | -                | 0.377 (0.129)    | 1 (0.987) |     3.35 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |      414 | 2024-06-09 | Preasy          | W   | 0.984      | -            | -                | -                | 1 (0.984) |     1.87 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |      688 | 2024-06-04 | Enterprise      | L   | 0.951      | -            | -                | -                | -         |   -25.80 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |      707 | 2024-06-03 | brazylijski luz | W   | 0.946      | 0.371        | -                | 0.281 (0.098)    | -         |     2.23 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |      709 | 2024-06-03 | Zero Tenacity   | W   | 0.945      | 0.371        | 0.153 (0.054)    | 1.000 (0.350)    | -         |     8.76 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |      799 | 2024-05-31 | UNiTY           | L   | 0.924      | -            | -                | -                | -         |   -24.77 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           19 |      904 | 2024-05-26 | Preasy          | W   | 0.892      | -            | -                | -                | -         |     1.47 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     1002 | 2024-05-22 | Permitta        | W   | 0.864      | 0.371        | 0.038 (0.012)    | 0.837 (0.268)    | -         |     2.27 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           17 |     1315 | 2024-05-14 | kONO            | L   | 0.811      | -            | -                | -                | -         |   -23.65 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     1331 | 2024-05-13 | UNiTY           | W   | 0.806      | 0.333        | 0.039 (0.010)    | -                | -         |     3.52 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     1337 | 2024-05-13 | Czech Republic  | W   | 0.805      | 0.333        | 0.104 (0.028)    | 0.493 (0.132)    | -         |     7.17 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     1348 | 2024-05-12 | Verdant         | W   | 0.800      | -            | -                | -                | -         |     1.50 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     1361 | 2024-05-12 | Preasy          | L   | 0.798      | -            | -                | -                | -         |   -24.12 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     1377 | 2024-05-11 | Lilmix          | W   | 0.794      | -            | -                | -                | 1 (0.794) |     1.83 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     1391 | 2024-05-11 | Flying Angels   | W   | 0.792      | -            | -                | -                | 1 (0.792) |     0.23 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     1409 | 2024-05-10 | FAVBET          | W   | 0.784      | 0.333        | -                | 0.395 (0.103)    | -         |     1.16 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     1933 | 2024-04-18 | UNiTY           | W   | 0.639      | -            | -                | -                | -         |     2.71 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            8 |     1998 | 2024-04-16 | Viperio         | W   | 0.626      | -            | -                | -                | -         |     0.36 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            7 |     2244 | 2024-04-07 | Alliance        | W   | 0.567      | -            | -                | -                | -         |     1.36 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2252 | 2024-04-07 | Metizport       | L   | 0.565      | -            | -                | -                | -         |   -15.55 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            5 |     2262 | 2024-04-06 | JANO            | W   | 0.559      | -            | -                | -                | -         |     0.38 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            4 |     2862 | 2024-03-09 | Alliance        | L   | 0.372      | -            | -                | -                | -         |   -10.94 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     2963 | 2024-03-05 | B8              | L   | 0.347      | -            | -                | -                | -         |    -8.60 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     2969 | 2024-03-05 | Insilio         | W   | 0.347      | -            | -                | -                | -         |     0.82 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            1 |     2976 | 2024-03-05 | Sashi           | W   | 0.347      | -            | -                | -                | -         |     1.91 | chawzyyy, draken, Lekr0, Ro1f, spooke     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,872.06)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-30 |      1.000 | $662.00        | $662.00         |
| 2024-06-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-15 |      1.000 | $11,615.00     | $11,615.00      |
| 2024-06-09 |      0.987 | $7,224.00      | $7,127.63       |
| 2024-06-06 |      0.965 | $1,000.00      | $965.29         |
| 2024-05-13 |      0.805 | $6,000.00      | $4,828.24       |
| 2024-05-11 |      0.794 | $4,170.00      | $3,310.05       |
| 2024-04-18 |      0.639 | $6,000.00      | $3,831.07       |
| 2024-04-07 |      0.567 | $940.00        | $532.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
