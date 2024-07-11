### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [76](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  997.1<br />
<br />
Final Rank Value (997.1) = Starting Rank Value (1029.1) + Head To Head Adjustments (-32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.287[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.298<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1029.1
- 400 + ( ( 0.298 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1029.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           73 |       31 | 2024-07-10 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -16.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           72 |       49 | 2024-07-09 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -28.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           71 |       51 | 2024-07-09 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.07 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           70 |       72 | 2024-07-08 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -28.94 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           69 |      244 | 2024-06-14 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -8.89 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           68 |      334 | 2024-06-10 | Space             | W   | 0.993      | -            | -                | -                | 0 (0.000) |    10.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           67 |      447 | 2024-06-08 | Zero Tenacity     | L   | 0.980      | -            | -                | -                | -         |   -12.74 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           66 |      507 | 2024-06-07 | Rare Atom         | W   | 0.973      | -            | -                | -                | 0 (0.000) |     3.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           65 |      525 | 2024-06-07 | Aurora Young Blud | W   | 0.971      | -            | -                | -                | 0 (0.000) |     5.71 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           64 |      584 | 2024-06-06 | Serbia            | W   | 0.965      | -            | -                | -                | 0 (0.000) |     7.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           63 |      647 | 2024-06-05 | EYEBALLERS        | L   | 0.958      | -            | -                | -                | -         |   -21.42 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           62 |      676 | 2024-06-04 | Illuminar         | W   | 0.953      | -            | -                | -                | 0 (0.000) |     2.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           61 |      681 | 2024-06-04 | Serbia            | W   | 0.952      | -            | -                | -                | 0 (0.000) |     7.13 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           60 |      735 | 2024-06-02 | UNiTY             | W   | 0.938      | -            | -                | -                | 0 (0.000) |    13.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           59 |      795 | 2024-05-31 | Zero Tenacity     | L   | 0.926      | -            | -                | -                | -         |   -11.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           58 |      815 | 2024-05-30 | Zero Tenacity     | W   | 0.920      | 0.371        | 0.153 (0.052)    | 1.000 (0.341)    | 0 (0.000) |    17.83 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           57 |      846 | 2024-05-29 | Illuminar         | W   | 0.911      | -            | -                | -                | 0 (0.000) |     3.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           56 |      917 | 2024-05-25 | Slovakia          | W   | 0.887      | 0.435        | -                | 0.891 (0.343)    | -         |    11.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           55 |      938 | 2024-05-24 | FURIA             | L   | 0.879      | -            | -                | -                | -         |    -1.35 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           54 |      943 | 2024-05-24 | ECSTATIC          | W   | 0.878      | -            | -                | -                | -         |     0.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           53 |      959 | 2024-05-23 | SINNERS           | W   | 0.871      | 0.435        | 0.057 (0.022)    | 0.767 (0.290)    | -         |    15.51 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           52 |     1080 | 2024-05-20 | Permitta          | W   | 0.852      | 0.435        | -                | 0.837 (0.310)    | -         |     9.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           51 |     1094 | 2024-05-19 | Sashi             | L   | 0.847      | -            | -                | -                | -         |    -5.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           50 |     1103 | 2024-05-19 | ALTERNATE aTTaX   | W   | 0.845      | 0.435        | 0.050 (0.018)    | -                | -         |    12.31 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           49 |     1123 | 2024-05-18 | 9 Pandas          | L   | 0.840      | -            | -                | -                | -         |    -8.87 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           48 |     1168 | 2024-05-17 | Romania           | W   | 0.832      | -            | -                | -                | -         |     6.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           47 |     1208 | 2024-05-16 | Sashi             | W   | 0.825      | 0.500        | 0.202 (0.083)    | 1.000 (0.412)    | -         |    21.48 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           46 |     1248 | 2024-05-15 | Endpoint          | L   | 0.820      | -            | -                | -                | -         |   -13.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           45 |     1303 | 2024-05-14 | SINNERS           | L   | 0.813      | -            | -                | -                | -         |   -10.49 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           44 |     1395 | 2024-05-11 | Preasy            | W   | 0.791      | -            | -                | -                | -         |     5.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           43 |     1558 | 2024-05-02 | Nemiga            | L   | 0.733      | -            | -                | -                | -         |    -3.88 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           42 |     1584 | 2024-05-01 | PARIVISION        | W   | 0.726      | -            | -                | -                | -         |    12.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           41 |     1619 | 2024-04-30 | 9 Pandas          | W   | 0.718      | 0.500        | 0.125 (0.045)    | 0.625 (0.224)    | -         |    14.19 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           40 |     1646 | 2024-04-28 | ALTERNATE aTTaX   | L   | 0.707      | -            | -                | -                | -         |   -10.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           39 |     1696 | 2024-04-26 | 9 Pandas          | W   | 0.693      | 0.500        | 0.125 (0.043)    | -                | -         |    13.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           38 |     1732 | 2024-04-25 | Sashi             | L   | 0.685      | -            | -                | -                | -         |    -4.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           37 |     1744 | 2024-04-24 | Permitta          | L   | 0.680      | -            | -                | -                | -         |   -10.06 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           36 |     1776 | 2024-04-22 | B8                | L   | 0.667      | -            | -                | -                | -         |    -7.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           35 |     1818 | 2024-04-20 | Young Ninjas      | W   | 0.654      | -            | -                | -                | -         |     6.50 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           34 |     1838 | 2024-04-20 | Permitta          | L   | 0.652      | -            | -                | -                | -         |   -10.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           33 |     1875 | 2024-04-19 | ALTERNATE aTTaX   | L   | 0.646      | -            | -                | -                | -         |   -10.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           32 |     1927 | 2024-04-18 | Permitta          | W   | 0.639      | 0.500        | -                | 0.837 (0.267)    | -         |     9.93 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           31 |     1960 | 2024-04-17 | Sashi             | W   | 0.633      | 0.371        | 0.202 (0.047)    | 1.000 (0.234)    | -         |    13.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           30 |     1994 | 2024-04-16 | 500               | L   | 0.627      | -            | -                | -                | -         |   -14.51 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           29 |     2033 | 2024-04-14 | SINNERS           | L   | 0.612      | -            | -                | -                | -         |    -5.58 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           28 |     2088 | 2024-04-11 | 3DMAX             | W   | 0.593      | 0.384        | 0.205 (0.047)    | 1.000 (0.228)    | -         |    14.87 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           27 |     2135 | 2024-04-10 | Sashi             | W   | 0.585      | 0.371        | 0.202 (0.044)    | 1.000 (0.217)    | -         |    12.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           26 |     2322 | 2024-04-04 | HAVU              | W   | 0.546      | -            | -                | -                | -         |     4.00 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           25 |     2394 | 2024-04-02 | BLEED             | L   | 0.533      | -            | -                | -                | -         |    -1.59 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           24 |     2423 | 2024-03-31 | FAVBET            | L   | 0.519      | -            | -                | -                | -         |   -11.73 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           23 |     2430 | 2024-03-30 | Lazer Cats        | W   | 0.512      | -            | -                | -                | -         |     1.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           22 |     2438 | 2024-03-29 | NAVI Junior       | L   | 0.506      | -            | -                | -                | -         |   -13.03 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           21 |     2457 | 2024-03-28 | GL Academy        | L   | 0.499      | -            | -                | -                | -         |   -12.25 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           20 |     2667 | 2024-03-17 | Slovakia          | L   | 0.425      | -            | -                | -                | -         |    -7.60 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           19 |     2676 | 2024-03-16 | ex-Preasy         | L   | 0.419      | -            | -                | -                | -         |    -8.42 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           18 |     2729 | 2024-03-14 | Slovakia          | W   | 0.406      | -            | -                | -                | -         |     5.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           17 |     2796 | 2024-03-12 | Alliance          | W   | 0.392      | -            | -                | -                | -         |     4.81 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           16 |     2818 | 2024-03-11 | MOUZ NXT          | L   | 0.386      | -            | -                | -                | -         |    -4.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           15 |     2837 | 2024-03-10 | MOUZ NXT          | W   | 0.379      | 0.303        | 0.152 (0.017)    | -                | -         |     7.53 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           14 |     2850 | 2024-03-09 | The Chosen Few    | L   | 0.373      | -            | -                | -                | -         |   -10.00 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           13 |     2878 | 2024-03-08 | Spirit Academy    | L   | 0.367      | -            | -                | -                | -         |   -10.68 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           12 |     2882 | 2024-03-08 | Entropiq          | W   | 0.366      | -            | -                | -                | -         |     0.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           11 |     2901 | 2024-03-07 | AURA              | W   | 0.361      | -            | -                | -                | -         |     0.65 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|           10 |     2939 | 2024-03-06 | Permitta          | L   | 0.353      | -            | -                | -                | -         |    -6.40 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            9 |     2941 | 2024-03-06 | Fraud5            | W   | 0.352      | -            | -                | -                | -         |     1.52 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            8 |     2970 | 2024-03-05 | B8                | L   | 0.347      | -            | -                | -                | -         |    -3.63 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            7 |     2997 | 2024-03-04 | ALTERNATE aTTaX   | W   | 0.339      | -            | -                | -                | -         |     5.40 | fear, jackasmo, jambo, s-chilla, zeRRoFIX     |
|            6 |     3528 | 2024-02-08 | BLEED             | L   | 0.172      | -            | -                | -                | -         |    -0.71 | jackasmo, jambo, marat2k, s-chilla, Zinchenko |
|            5 |     3709 | 2024-01-29 | Alliance          | W   | 0.106      | -            | -                | -                | -         |     1.13 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            4 |     4036 | 2024-01-18 | MOUZ NXT          | L   | 0.031      | -            | -                | -                | -         |    -0.39 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            3 |     4090 | 2024-01-16 | Zero Tenacity     | L   | 0.022      | -            | -                | -                | -         |    -0.27 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            2 |     4106 | 2024-01-16 | Rebels            | W   | 0.021      | -            | -                | -                | -         |     0.38 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |
|            1 |     4125 | 2024-01-16 | RUBY              | W   | 0.020      | -            | -                | -                | -         |     0.29 | jackasmo, jambo, marat2k, s-chilla, zeRRoFIX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,589.23)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-06 |      0.965 | $11,000.00     | $10,618.23      |
| 2024-05-03 |      0.740 | $12,500.00     | $9,244.29       |
| 2024-03-31 |      0.519 | $657.00        | $341.27         |
| 2024-03-30 |      0.512 | $1,000.00      | $512.08         |
| 2024-03-18 |      0.432 | $3,000.00      | $1,294.80       |
| 2024-03-11 |      0.386 | $1,500.00      | $578.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
