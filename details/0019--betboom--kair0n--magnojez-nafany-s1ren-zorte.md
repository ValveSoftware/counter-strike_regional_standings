### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Global Rank: [19](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [15]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1433.7<br />
<br />
Final Rank Value (1433.7) = Starting Rank Value (1448.8) + Head To Head Adjustments (-15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.630[<sup>1</sup>](#table2)
- Bounty Collected: 0.552[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.590[<sup>2</sup>](#table1)

The average of these factors is 0.508<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1448.8
- 400 + ( ( 0.508 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1448.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |     1200 | 2024-06-07 | Astralis          | L   | 0.839      | -            | -                | -                | -         |    -4.85 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           63 |     1267 | 2024-06-06 | Eternal Fire      | W   | 0.832      | 0.715        | 0.759 (0.452)    | 0.462 (0.275)    | 1 (0.832) |    20.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           62 |     1279 | 2024-06-06 | Complexity        | W   | 0.831      | 0.715        | 0.319 (0.190)    | 0.367 (0.218)    | 1 (0.831) |    20.54 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           61 |     1315 | 2024-06-05 | BIG               | W   | 0.826      | 0.715        | 0.133 (0.079)    | 0.300 (0.177)    | 1 (0.826) |     9.08 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           60 |     1325 | 2024-06-05 | FURIA             | L   | 0.825      | -            | -                | -                | -         |    -7.01 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           59 |     1337 | 2024-06-05 | fnatic            | W   | 0.824      | 0.715        | 0.374 (0.221)    | 0.633 (0.373)    | 1 (0.824) |    15.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           58 |     1613 | 2024-05-25 | B8                | L   | 0.752      | -            | -                | -                | -         |   -18.30 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           57 |     1639 | 2024-05-24 | DMS               | W   | 0.744      | -            | -                | -                | 0 (0.000) |     1.63 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           56 |     1728 | 2024-05-21 | Eternal Fire      | L   | 0.726      | -            | -                | -                | -         |    -3.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           55 |     1754 | 2024-05-20 | MIBR              | W   | 0.720      | 0.769        | 0.202 (0.112)    | 0.610 (0.338)    | -         |    13.21 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           54 |     1763 | 2024-05-20 | Astralis          | L   | 0.719      | -            | -                | -                | -         |    -3.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           53 |     1776 | 2024-05-20 | MIBR              | W   | 0.717      | 0.769        | 0.202 (0.111)    | 0.610 (0.336)    | -         |    13.72 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           52 |     1933 | 2024-05-15 | Falcons           | L   | 0.686      | -            | -                | -                | -         |    -9.39 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           51 |     2004 | 2024-05-14 | MOUZ              | L   | 0.678      | -            | -                | -                | -         |    -1.08 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           50 |     2043 | 2024-05-12 | B8                | L   | 0.666      | -            | -                | -                | -         |   -17.76 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           49 |     2050 | 2024-05-12 | 9 Pandas          | W   | 0.665      | -            | -                | -                | -         |     2.28 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           48 |     2082 | 2024-05-11 | Metizport         | W   | 0.658      | -            | -                | -                | -         |     1.72 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           47 |     2100 | 2024-05-10 | Enterprise        | W   | 0.651      | 0.435        | -                | 0.622 (0.176)    | -         |     1.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           46 |     2160 | 2024-05-07 | FlyQuest          | L   | 0.632      | -            | -                | -                | -         |   -14.65 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           45 |     2212 | 2024-05-04 | AMKAL             | L   | 0.612      | -            | -                | -                | -         |   -15.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           44 |     2217 | 2024-05-04 | 9 Pandas          | W   | 0.612      | -            | -                | -                | -         |     1.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           43 |     2240 | 2024-05-03 | Insilio           | W   | 0.604      | -            | -                | -                | -         |     1.21 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           42 |     2280 | 2024-05-01 | EYEBALLERS        | W   | 0.592      | -            | -                | -                | -         |     0.93 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           41 |     2310 | 2024-04-30 | 3DMAX             | L   | 0.584      | -            | -                | -                | -         |    -4.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           40 |     2383 | 2024-04-26 | M80               | W   | 0.560      | 0.889        | 0.190 (0.095)    | 0.551 (0.274)    | 1 (0.560) |     5.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           39 |     2397 | 2024-04-26 | Falcons           | W   | 0.558      | 0.889        | 0.208 (0.103)    | -                | 1 (0.558) |     9.26 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           38 |     2421 | 2024-04-25 | Vitality          | L   | 0.552      | -            | -                | -                | -         |    -1.50 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           37 |     2452 | 2024-04-23 | M80               | W   | 0.540      | 0.889        | 0.190 (0.091)    | 0.551 (0.264)    | 1 (0.540) |     4.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           36 |     2556 | 2024-04-19 | Cloud9            | L   | 0.513      | -            | -                | -                | -         |   -13.94 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           35 |     2571 | 2024-04-19 | Eternal Fire      | L   | 0.512      | -            | -                | -                | -         |    -2.42 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           34 |     2598 | 2024-04-18 | Apeks             | W   | 0.506      | -            | -                | -                | -         |     1.12 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           33 |     2603 | 2024-04-18 | brazylijski luz   | W   | 0.506      | -            | -                | -                | -         |     0.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           32 |     2608 | 2024-04-18 | Serbia            | W   | 0.506      | -            | -                | -                | -         |     0.38 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           31 |     2725 | 2024-04-14 | 3DMAX             | W   | 0.479      | 0.358        | 0.504 (0.086)    | 1.000 (0.172)    | -         |    11.66 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           30 |     2732 | 2024-04-13 | OG                | L   | 0.473      | -            | -                | -                | -         |   -13.18 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           29 |     2737 | 2024-04-13 | Aurora            | L   | 0.472      | -            | -                | -                | -         |    -3.34 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           28 |     2744 | 2024-04-13 | Sampi             | W   | 0.471      | -            | -                | -                | -         |     0.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           27 |     2771 | 2024-04-11 | Aurora            | L   | 0.460      | -            | -                | -                | -         |    -3.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           26 |     2779 | 2024-04-11 | Ninjas in Pyjamas | W   | 0.459      | -            | -                | -                | -         |    10.85 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           25 |     2784 | 2024-04-11 | AMKAL             | L   | 0.458      | -            | -                | -                | -         |   -12.14 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           24 |     2825 | 2024-04-10 | Aurora            | W   | 0.452      | -            | -                | -                | -         |    11.13 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           23 |     2880 | 2024-04-09 | BIG               | W   | 0.445      | -            | -                | -                | -         |     3.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           22 |     2955 | 2024-04-06 | Alliance          | W   | 0.425      | -            | -                | -                | -         |     0.55 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           21 |     2969 | 2024-04-05 | BLEED             | W   | 0.419      | -            | -                | -                | -         |     1.13 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           20 |     3007 | 2024-04-04 | Alliance          | W   | 0.413      | -            | -                | -                | -         |     0.55 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           19 |     3019 | 2024-04-04 | BLEED             | W   | 0.411      | -            | -                | -                | -         |     1.09 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           18 |     3188 | 2024-03-27 | FAVBET            | L   | 0.359      | -            | -                | -                | -         |   -11.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           17 |     3225 | 2024-03-24 | FORZE             | L   | 0.339      | -            | -                | -                | -         |   -10.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           16 |     3240 | 2024-03-23 | fnatic            | W   | 0.331      | -            | -                | -                | -         |     7.19 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           15 |     3279 | 2024-03-21 | B8                | W   | 0.318      | -            | -                | -                | -         |     1.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte |
|           14 |     3675 | 2024-03-05 | BLEED             | L   | 0.212      | -            | -                | -                | -         |    -6.19 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           13 |     3693 | 2024-03-04 | Gaimin Gladiators | W   | 0.204      | -            | -                | -                | -         |     0.51 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |     3708 | 2024-03-03 | ex-Preasy         | L   | 0.199      | -            | -                | -                | -         |    -6.11 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |     3712 | 2024-03-03 | ex-Sprout         | W   | 0.199      | -            | -                | -                | -         |     0.04 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |     3752 | 2024-03-01 | ex-Preasy         | W   | 0.187      | -            | -                | -                | -         |     0.16 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |     3784 | 2024-02-28 | ALTERNATE aTTaX   | W   | 0.172      | -            | -                | -                | -         |     0.41 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |     3891 | 2024-02-23 | ex-Guild Eagles   | L   | 0.138      | -            | -                | -                | -         |    -4.22 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |     4030 | 2024-02-17 | Eternal Fire      | L   | 0.099      | -            | -                | -                | -         |    -0.54 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |     4054 | 2024-02-16 | Natus Vincere     | L   | 0.093      | -            | -                | -                | -         |    -0.13 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |     4092 | 2024-02-15 | Enterprise        | W   | 0.084      | -            | -                | -                | 1 (0.084) |     0.14 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |     4127 | 2024-02-14 | Into the Breach   | W   | 0.079      | -            | -                | -                | 1 (0.079) |     0.02 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |     4130 | 2024-02-14 | fnatic            | L   | 0.078      | -            | -                | -                | -         |    -0.78 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |     4213 | 2024-02-08 | FORZE             | L   | 0.040      | -            | -                | -                | -         |    -1.21 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |     4219 | 2024-02-08 | Nemiga            | L   | 0.039      | -            | -                | -                | -         |    -1.01 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85,050.89)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.852 | $20,000.00     | $17,049.18      |
| 2024-05-26 |      0.759 | $2,000.00      | $1,518.21       |
| 2024-05-23 |      0.739 | $12,500.00     | $9,240.55       |
| 2024-05-12 |      0.666 | $10,000.00     | $6,661.72       |
| 2024-05-12 |      0.666 | $17,500.00     | $11,650.32      |
| 2024-05-04 |      0.612 | $10,000.00     | $6,124.41       |
| 2024-05-02 |      0.599 | $1,000.00      | $599.33         |
| 2024-04-14 |      0.479 | $52,500.00     | $25,158.43      |
| 2024-04-14 |      0.479 | $9,000.00      | $4,307.12       |
| 2024-03-06 |      0.219 | $12,500.00     | $2,741.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
