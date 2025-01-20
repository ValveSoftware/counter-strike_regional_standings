### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [45](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1142.7<br />
<br />
Final Rank Value (1142.7) = Starting Rank Value (1128.1) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.558[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.377[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1128.1
- 400 + ( ( 0.367 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1128.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |        8 | 2025-01-17 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.33 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           67 |      263 | 2024-12-12 | ECSTATIC          | L   | 0.944      | -            | -                | -                | -         |   -20.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |      663 | 2024-11-22 | Astralis          | L   | 0.810      | -            | -                | -                | -         |    -8.53 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |      687 | 2024-11-21 | Aurora            | L   | 0.804      | -            | -                | -                | -         |   -19.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |      702 | 2024-11-20 | Spirit            | L   | 0.802      | -            | -                | -                | -         |    -0.34 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     1221 | 2024-10-27 | SAW               | L   | 0.639      | -            | -                | -                | -         |    -6.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     1225 | 2024-10-27 | paiN              | W   | 0.638      | 0.500        | 0.253 (0.081)    | 0.717 (0.229)    | 1 (0.638) |    16.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     1248 | 2024-10-26 | Eternal Fire      | W   | 0.632      | 0.500        | 0.324 (0.103)    | 0.364 (0.115)    | 1 (0.632) |    15.38 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     1275 | 2024-10-25 | SAW               | L   | 0.625      | -            | -                | -                | -         |    -5.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     1285 | 2024-10-25 | Eternal Fire      | W   | 0.623      | 0.500        | 0.324 (0.101)    | 0.364 (0.113)    | 1 (0.623) |    15.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     1361 | 2024-10-19 | Falcons           | L   | 0.586      | -            | -                | -                | -         |    -0.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     1400 | 2024-10-18 | JANO              | W   | 0.578      | -            | -                | -                | 1 (0.578) |     2.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     1455 | 2024-10-16 | The MongolZ       | L   | 0.565      | -            | -                | -                | -         |    -0.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1460 | 2024-10-16 | Ninjas in Pyjamas | W   | 0.564      | 0.589        | 0.078 (0.026)    | 0.250 (0.083)    | 1 (0.564) |     7.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1686 | 2024-10-05 | GamerLegion       | L   | 0.493      | -            | -                | -                | -         |    -3.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1772 | 2024-10-03 | ALTERNATE aTTaX   | W   | 0.478      | 0.435        | 0.074 (0.015)    | 0.680 (0.141)    | 0 (0.000) |     5.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1933 | 2024-09-28 | 3DMAX             | W   | 0.446      | 0.143        | 0.422 (0.027)    | -                | 0 (0.000) |    11.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1979 | 2024-09-27 | SAW               | W   | 0.439      | 0.143        | 0.253 (0.016)    | -                | 0 (0.000) |    10.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     1984 | 2024-09-27 | OG                | W   | 0.439      | -            | -                | -                | 0 (0.000) |     3.83 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     1993 | 2024-09-27 | GamerLegion       | L   | 0.438      | -            | -                | -                | -         |    -2.71 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     2025 | 2024-09-26 | Fire Flux         | W   | 0.432      | -            | -                | -                | 0 (0.000) |     2.42 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     2034 | 2024-09-26 | Illuminar         | W   | 0.432      | -            | -                | -                | -         |     3.93 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     2048 | 2024-09-26 | Insilio           | W   | 0.430      | 0.435        | -                | 0.296 (0.055)    | -         |     2.39 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     2378 | 2024-09-16 | Sampi             | L   | 0.363      | -            | -                | -                | -         |    -7.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     2507 | 2024-09-12 | AMKAL             | L   | 0.337      | -            | -                | -                | -         |    -8.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     2593 | 2024-09-08 | GamerLegion       | W   | 0.312      | -            | -                | -                | -         |     1.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     2599 | 2024-09-08 | Zero Tenacity     | W   | 0.311      | 0.435        | -                | 0.567 (0.077)    | -         |     3.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     2625 | 2024-09-07 | UNPAID            | W   | 0.305      | 0.435        | 0.140 (0.019)    | -                | -         |     3.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     2648 | 2024-09-06 | 9 Pandas          | L   | 0.299      | -            | -                | -                | -         |    -4.63 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     2676 | 2024-09-05 | SINNERS           | W   | 0.293      | 0.500        | 0.100 (0.015)    | 0.676 (0.099)    | -         |     4.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     2700 | 2024-09-05 | 9INE              | W   | 0.291      | 0.435        | 0.125 (0.016)    | 1.000 (0.127)    | -         |     3.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     2766 | 2024-09-03 | TSM               | L   | 0.278      | -            | -                | -                | -         |    -6.89 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     2800 | 2024-09-02 | UNPAID            | W   | 0.270      | -            | -                | -                | -         |     2.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     2898 | 2024-08-29 | Revenant          | W   | 0.244      | -            | -                | -                | -         |     0.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     2924 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.239      | -            | -                | -                | -         |    -3.92 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     2933 | 2024-08-28 | SINNERS           | W   | 0.238      | 0.435        | -                | 0.676 (0.070)    | -         |     3.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     2984 | 2024-08-27 | Endpoint          | W   | 0.233      | -            | -                | -                | -         |     1.32 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     3000 | 2024-08-27 | 9INE              | L   | 0.231      | -            | -                | -                | -         |    -4.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     3053 | 2024-08-26 | Falcons           | L   | 0.226      | -            | -                | -                | -         |    -0.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     3075 | 2024-08-26 | Eternal Fire      | L   | 0.225      | -            | -                | -                | -         |    -1.66 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     3118 | 2024-08-25 | Revenant          | W   | 0.218      | -            | -                | -                | -         |     0.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     3160 | 2024-08-23 | Monte             | W   | 0.205      | -            | -                | -                | -         |     2.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     3180 | 2024-08-23 | Rhyno             | W   | 0.203      | -            | -                | -                | -         |     0.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           25 |     3205 | 2024-08-22 | PARIVISION        | L   | 0.197      | -            | -                | -                | -         |    -4.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     3232 | 2024-08-21 | ex-Enterprise     | W   | 0.192      | -            | -                | -                | -         |     1.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           23 |     3273 | 2024-08-21 | SINNERS           | L   | 0.190      | -            | -                | -                | -         |    -3.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           22 |     3295 | 2024-08-20 | RUSH B            | W   | 0.186      | -            | -                | -                | -         |     1.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           21 |     3320 | 2024-08-19 | Monte             | W   | 0.179      | -            | -                | -                | -         |     1.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           20 |     3323 | 2024-08-19 | Sashi             | W   | 0.179      | -            | -                | -                | -         |     1.96 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           19 |     3328 | 2024-08-19 | AMKAL             | W   | 0.179      | -            | -                | -                | -         |     0.94 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           18 |     3374 | 2024-08-17 | GenOne            | W   | 0.166      | -            | -                | -                | -         |     0.83 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           17 |     3377 | 2024-08-17 | Lazer Cats        | W   | 0.165      | -            | -                | -                | -         |     0.34 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           16 |     3421 | 2024-08-15 | OG                | L   | 0.153      | -            | -                | -                | -         |    -3.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           15 |     3425 | 2024-08-15 | Spirit Academy    | W   | 0.152      | -            | -                | -                | -         |     1.68 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           14 |     3433 | 2024-08-15 | UNPAID            | W   | 0.152      | -            | -                | -                | -         |     1.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           13 |     3479 | 2024-08-13 | KOI               | W   | 0.140      | -            | -                | -                | -         |     1.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           12 |     3532 | 2024-08-12 | SINNERS           | L   | 0.133      | -            | -                | -                | -         |    -2.27 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           11 |     3592 | 2024-08-10 | Nemiga            | L   | 0.117      | -            | -                | -                | -         |    -1.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           10 |     3621 | 2024-08-09 | TALON             | W   | 0.111      | -            | -                | -                | -         |     0.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            9 |     3665 | 2024-08-07 | Nemiga            | L   | 0.100      | -            | -                | -                | -         |    -0.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            8 |     3694 | 2024-08-07 | 9INE              | W   | 0.097      | -            | -                | -                | -         |     0.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            7 |     3748 | 2024-08-05 | los kogutos       | L   | 0.086      | -            | -                | -                | -         |    -1.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            6 |     3781 | 2024-08-04 | BC.Game           | W   | 0.079      | -            | -                | -                | -         |     0.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            5 |     3852 | 2024-08-02 | SovvyKiNG         | W   | 0.066      | -            | -                | -                | -         |     0.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            4 |     3934 | 2024-07-31 | Qiang             | W   | 0.053      | -            | -                | -                | -         |     0.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            3 |     3988 | 2024-07-30 | ARCRED            | W   | 0.046      | -            | -                | -                | -         |     0.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            2 |     4089 | 2024-07-27 | HEROIC            | L   | 0.023      | -            | -                | -                | -         |    -0.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            1 |     4139 | 2024-07-25 | SINNERS           | W   | 0.013      | -            | -                | -                | -         |     0.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,764.10)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.639 | $20,000.00     | $12,780.46      |
| 2024-10-20 |      0.592 | $15,000.00     | $8,887.24       |
| 2024-10-20 |      0.592 | $3,500.00      | $2,070.89       |
| 2024-10-06 |      0.500 | $2,000.00      | $999.19         |
| 2024-09-28 |      0.446 | $2,000.00      | $891.50         |
| 2024-09-08 |      0.312 | $22,000.00     | $6,870.91       |
| 2024-08-28 |      0.239 | $10,000.00     | $2,392.30       |
| 2024-08-11 |      0.124 | $5,000.00      | $622.31         |
| 2024-08-06 |      0.092 | $2,000.00      | $184.36         |
| 2024-07-28 |      0.032 | $2,000.00      | $64.93          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
