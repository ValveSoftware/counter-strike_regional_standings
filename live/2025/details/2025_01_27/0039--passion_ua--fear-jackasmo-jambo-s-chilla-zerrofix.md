### Roster Details<br />
Team Name: Passion UA<br />
Roster: fear, jackasmo, jambo, s-chilla, zeRRoFIX<br />
Global Rank: [39](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [28]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1151.5<br />
<br />
Final Rank Value (1151.5) = Starting Rank Value (1165.1) + Head To Head Adjustments (-13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.505[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.517[<sup>2</sup>](#table1)

The average of these factors is 0.391<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1165.1
- 400 + ( ( 0.391 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1165.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      648 | 2024-12-03 | Wildcard          | L   | 0.832      | -            | -                | -                | -         |    -7.02 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           65 |      668 | 2024-12-02 | GamerLegion       | L   | 0.825      | -            | -                | -                | -         |    -6.01 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           64 |      693 | 2024-11-30 | MIBR              | W   | 0.816      | 0.143        | 0.205 (0.024)    | -                | 1 (0.816) |    20.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           63 |      717 | 2024-11-30 | Complexity        | W   | 0.811      | -            | -                | -                | 1 (0.811) |    18.21 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           62 |      724 | 2024-11-29 | BIG               | L   | 0.810      | -            | -                | -                | -         |    -5.62 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           61 |      817 | 2024-11-23 | Astralis          | W   | 0.770      | 0.143        | 0.318 (0.035)    | -                | 1 (0.770) |    17.29 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           60 |      842 | 2024-11-23 | Falcons           | L   | 0.764      | -            | -                | -                | -         |    -0.95 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           59 |      874 | 2024-11-22 | BIG               | L   | 0.757      | -            | -                | -                | -         |    -5.13 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           58 |      893 | 2024-11-21 | Spirit            | W   | 0.751      | 0.143        | 1.000 (0.107)    | 0.842 (0.090)    | 1 (0.751) |    23.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           57 |      903 | 2024-11-20 | Virtus.pro        | W   | 0.750      | 0.143        | 0.159 (0.017)    | -                | 1 (0.750) |    17.34 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           56 |     1237 | 2024-11-06 | 500               | L   | 0.652      | -            | -                | -                | -         |   -13.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           55 |     1405 | 2024-10-29 | los kogutos       | L   | 0.599      | -            | -                | -                | -         |   -10.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           54 |     1431 | 2024-10-27 | los kogutos       | L   | 0.586      | -            | -                | -                | -         |   -11.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           53 |     1490 | 2024-10-25 | 9INE              | L   | 0.571      | -            | -                | -                | -         |   -12.28 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           52 |     1696 | 2024-10-13 | Mission Possible  | W   | 0.494      | -            | -                | -                | 0 (0.000) |     0.55 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           51 |     1701 | 2024-10-13 | ex-Enterprise     | W   | 0.493      | -            | -                | -                | 0 (0.000) |     2.36 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           50 |     1716 | 2024-10-12 | Mission Possible  | L   | 0.486      | -            | -                | -                | -         |   -14.84 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           49 |     1725 | 2024-10-12 | FAVBET            | L   | 0.485      | -            | -                | -                | -         |   -12.30 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           48 |     1737 | 2024-10-11 | Cloud9            | W   | 0.478      | 0.435        | 0.070 (0.015)    | -                | 0 (0.000) |     5.49 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           47 |     1857 | 2024-10-06 | GamerLegion       | L   | 0.447      | -            | -                | -                | -         |    -3.36 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           46 |     1871 | 2024-10-06 | 3DMAX             | W   | 0.445      | 0.435        | 0.404 (0.078)    | 0.553 (0.107)    | 0 (0.000) |    10.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           45 |     1891 | 2024-10-05 | ALTERNATE aTTaX   | W   | 0.440      | 0.435        | -                | 0.666 (0.127)    | 0 (0.000) |     4.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           44 |     1900 | 2024-10-05 | los kogutos       | W   | 0.439      | 0.435        | 0.070 (0.013)    | 0.808 (0.154)    | -         |     5.68 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           43 |     1909 | 2024-10-05 | TSM               | W   | 0.438      | -            | -                | -                | -         |     2.92 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           42 |     1940 | 2024-10-04 | Aurora            | W   | 0.432      | -            | -                | -                | -         |     3.64 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           41 |     1977 | 2024-10-03 | GameAgents        | W   | 0.425      | -            | -                | -                | -         |     2.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           40 |     1983 | 2024-10-03 | GUN5              | W   | 0.424      | 0.435        | 0.227 (0.042)    | 0.988 (0.182)    | -         |     5.97 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           39 |     2058 | 2024-10-01 | RUBY              | W   | 0.413      | -            | -                | -                | -         |     0.68 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           38 |     2072 | 2024-10-01 | Into the Breach   | W   | 0.411      | -            | -                | -                | -         |     3.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           37 |     2090 | 2024-09-30 | ECSTATIC          | W   | 0.405      | 0.435        | 0.080 (0.014)    | 1.000 (0.176)    | -         |     4.22 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           36 |     2157 | 2024-09-28 | Gaimin Gladiators | W   | 0.391      | 0.371        | -                | 0.874 (0.127)    | -         |     3.50 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           35 |     2188 | 2024-09-27 | CPH Wolves        | W   | 0.386      | -            | -                | -                | -         |     1.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           34 |     2242 | 2024-09-26 | HEROIC            | L   | 0.379      | -            | -                | -                | -         |    -4.27 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           33 |     2303 | 2024-09-25 | WW                | W   | 0.371      | -            | -                | -                | -         |     0.47 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           32 |     2339 | 2024-09-24 | Adventurers       | L   | 0.366      | -            | -                | -                | -         |    -9.77 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           31 |     2378 | 2024-09-23 | Lynn Vision       | W   | 0.360      | -            | -                | -                | -         |     3.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           30 |     2400 | 2024-09-22 | CYBERSHOKE        | L   | 0.354      | -            | -                | -                | -         |    -9.25 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           29 |     2408 | 2024-09-22 | 9INE              | W   | 0.352      | 0.371        | 0.125 (0.016)    | 1.000 (0.130)    | -         |     3.47 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           28 |     2449 | 2024-09-20 | Monte Gen         | L   | 0.340      | -            | -                | -                | -         |    -8.82 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           27 |     2525 | 2024-09-18 | FAVBET            | W   | 0.325      | 0.435        | -                | 1.000 (0.141)    | -         |     2.47 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           26 |     2534 | 2024-09-18 | Illuminar         | W   | 0.324      | -            | -                | -                | -         |     0.70 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           25 |     2575 | 2024-09-16 | EYEBALLERS        | W   | 0.312      | -            | -                | -                | -         |     1.67 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           24 |     2591 | 2024-09-15 | Lazer Cats        | W   | 0.307      | -            | -                | -                | -         |     0.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           23 |     2595 | 2024-09-15 | TNL               | W   | 0.306      | -            | -                | -                | -         |     1.23 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           22 |     2660 | 2024-09-13 | ECSTATIC          | L   | 0.294      | -            | -                | -                | -         |    -6.56 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           21 |     2726 | 2024-09-11 | HOTU              | L   | 0.280      | -            | -                | -                | -         |    -8.00 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           20 |     2773 | 2024-09-10 | UNPAID            | L   | 0.271      | -            | -                | -                | -         |    -6.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           19 |     2781 | 2024-09-09 | PeeP              | W   | 0.267      | -            | -                | -                | -         |     0.26 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           18 |     2807 | 2024-09-08 | GamerLegion       | L   | 0.258      | -            | -                | -                | -         |    -7.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           17 |     2837 | 2024-09-07 | GL Academy        | W   | 0.253      | -            | -                | -                | -         |     0.12 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           16 |     2839 | 2024-09-07 | CYBERSHOKE        | W   | 0.252      | -            | -                | -                | -         |     1.18 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           15 |     2854 | 2024-09-06 | Gaimin Gladiators | W   | 0.247      | 0.435        | -                | 0.874 (0.094)    | -         |     1.91 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           14 |     2955 | 2024-09-03 | Daystar           | L   | 0.227      | -            | -                | -                | -         |    -6.68 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           13 |     2980 | 2024-09-03 | AMKAL             | L   | 0.224      | -            | -                | -                | -         |    -6.14 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           12 |     3166 | 2024-08-28 | Monte             | L   | 0.184      | -            | -                | -                | -         |    -3.96 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           11 |     3248 | 2024-08-26 | 9INE              | L   | 0.174      | -            | -                | -                | -         |    -4.05 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           10 |     3264 | 2024-08-26 | Endpoint          | L   | 0.173      | -            | -                | -                | -         |    -4.72 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            9 |     3371 | 2024-08-23 | OG                | W   | 0.152      | -            | -                | -                | -         |     1.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            8 |     3412 | 2024-08-22 | ARCRED            | W   | 0.145      | -            | -                | -                | -         |     0.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            7 |     3455 | 2024-08-21 | Cloud9            | L   | 0.139      | -            | -                | -                | -         |    -2.99 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            6 |     3490 | 2024-08-21 | BIG               | W   | 0.138      | -            | -                | -                | -         |     3.33 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            5 |     3640 | 2024-08-15 | EYEBALLERS        | W   | 0.099      | -            | -                | -                | -         |     0.46 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            4 |     3841 | 2024-08-08 | ECLOT             | W   | 0.053      | -            | -                | -                | -         |     1.16 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            3 |     3852 | 2024-08-08 | Endpoint          | L   | 0.051      | -            | -                | -                | -         |    -1.41 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            2 |     4031 | 2024-08-03 | HEROIC            | L   | 0.019      | -            | -                | -                | -         |    -0.29 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            1 |     4110 | 2024-08-01 | 9INE              | W   | 0.005      | -            | -                | -                | -         |     0.04 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,392.57)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.832 | $10,000.00     | $8,315.36       |
| 2024-10-27 |      0.587 | $1,275.00      | $748.19         |
| 2024-10-13 |      0.494 | $2,000.00      | $987.64         |
| 2024-10-06 |      0.447 | $10,000.00     | $4,474.90       |
| 2024-10-05 |      0.438 | $11,000.00     | $4,816.43       |
| 2024-09-15 |      0.307 | $2,440.00      | $749.00         |
| 2024-09-08 |      0.260 | $5,000.00      | $1,301.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
