### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [57](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [41]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1002.5<br />
<br />
Final Rank Value (1002.5) = Starting Rank Value (1009.9) + Head To Head Adjustments (-7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.436[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.9
- 400 + ( ( 0.307 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1009.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |        9 | 2024-08-21 | Monte             | W   | 1.000      | 0.143        | -                | 0.435 (0.062)    | 0 (0.000) |    15.69 | adamS, dav1g, JUST, mopoz, stadodo |
|           48 |       57 | 2024-08-21 | ENCE              | W   | 1.000      | 0.143        | 0.157 (0.022)    | -                | 0 (0.000) |    25.86 | adamS, dav1g, JUST, mopoz, stadodo |
|           47 |      100 | 2024-08-19 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -14.80 | adamS, dav1g, JUST, mopoz, stadodo |
|           46 |      107 | 2024-08-19 | Gaimin Gladiators | W   | 1.000      | 0.143        | 0.029 (0.004)    | -                | 0 (0.000) |    11.77 | adamS, dav1g, JUST, mopoz, stadodo |
|           45 |      204 | 2024-08-15 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -26.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           44 |      254 | 2024-08-13 | B8                | L   | 1.000      | -            | -                | -                | -         |   -11.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |      308 | 2024-08-12 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      496 | 2024-08-06 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -11.97 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      718 | 2024-07-31 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |      879 | 2024-07-26 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.550 (0.275)    | 0 (0.000) |     7.29 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |     1149 | 2024-07-18 | Monte             | L   | 0.973      | -            | -                | -                | -         |   -22.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1290 | 2024-07-16 | Insilio           | W   | 0.959      | 0.500        | 0.027 (0.013)    | 0.482 (0.231)    | 0 (0.000) |    11.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1557 | 2024-06-16 | 9z                | L   | 0.759      | -            | -                | -                | -         |    -2.00 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1609 | 2024-06-14 | RED Canids        | W   | 0.748      | 0.548        | 0.065 (0.027)    | 0.655 (0.269)    | 1 (0.748) |    15.04 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     1612 | 2024-06-14 | Imperial          | W   | 0.748      | 0.548        | 0.200 (0.082)    | 0.617 (0.253)    | 1 (0.748) |    18.03 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     1769 | 2024-06-09 | Sangal            | L   | 0.713      | -            | -                | -                | -         |    -5.46 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     1963 | 2024-06-06 | SINNERS           | W   | 0.693      | 0.500        | 0.075 (0.026)    | 1.000 (0.346)    | 0 (0.000) |    12.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     2025 | 2024-06-05 | 3DMAX             | W   | 0.686      | 0.500        | 0.519 (0.178)    | 0.969 (0.333)    | 0 (0.000) |    20.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     2157 | 2024-06-01 | ENCE              | L   | 0.659      | -            | -                | -                | -         |    -2.93 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     2165 | 2024-06-01 | Zero Tenacity     | L   | 0.658      | -            | -                | -                | -         |    -7.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2832 | 2024-05-09 | B8                | L   | 0.504      | -            | -                | -                | -         |    -7.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2994 | 2024-05-01 | Zero Tenacity     | L   | 0.451      | -            | -                | -                | -         |    -6.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     3314 | 2024-04-18 | ex-Guild Eagles   | L   | 0.366      | -            | -                | -                | -         |    -9.11 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     3323 | 2024-04-18 | fnatic            | W   | 0.366      | 0.143        | 0.348 (0.018)    | -                | 0 (0.000) |    10.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     3393 | 2024-04-16 | BLEED             | L   | 0.353      | -            | -                | -                | -         |    -6.84 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     3526 | 2024-04-10 | RUSH B            | W   | 0.313      | 0.500        | -                | 0.340 (0.053)    | -         |     3.22 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     3580 | 2024-04-09 | Aurora            | W   | 0.306      | 0.500        | 0.372 (0.057)    | 0.643 (0.098)    | -         |     9.29 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     3586 | 2024-04-09 | Apeks             | L   | 0.306      | -            | -                | -                | -         |    -7.04 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     3614 | 2024-04-08 | GUN5              | W   | 0.299      | -            | -                | -                | -         |     0.30 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     3619 | 2024-04-08 | fnatic            | L   | 0.298      | -            | -                | -                | -         |    -0.75 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     3720 | 2024-04-04 | NOM               | W   | 0.272      | -            | -                | -                | -         |     0.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     3754 | 2024-04-03 | 9INE              | W   | 0.266      | -            | -                | -                | -         |     0.52 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3791 | 2024-04-02 | TSM               | W   | 0.260      | -            | -                | -                | -         |     1.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3857 | 2024-03-28 | EYEBALLERS        | L   | 0.226      | -            | -                | -                | -         |    -4.67 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     4029 | 2024-03-18 | FURIA             | L   | 0.159      | -            | -                | -                | -         |    -0.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     4046 | 2024-03-17 | ENCE              | L   | 0.153      | -            | -                | -                | -         |    -0.56 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     4061 | 2024-03-17 | SAW               | L   | 0.152      | -            | -                | -                | -         |    -0.14 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     4152 | 2024-03-13 | Sangal            | W   | 0.127      | 0.500        | 0.277 (0.018)    | 0.800 (0.051)    | -         |     2.84 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     4207 | 2024-03-11 | B8                | L   | 0.113      | -            | -                | -                | -         |    -1.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     4213 | 2024-03-11 | Apeks             | L   | 0.112      | -            | -                | -                | -         |    -2.62 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4325 | 2024-03-06 | 9 Pandas          | W   | 0.080      | -            | -                | -                | -         |     1.16 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4362 | 2024-03-05 | FORZE             | W   | 0.074      | -            | -                | -                | -         |     0.66 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4368 | 2024-03-05 | Nemiga            | W   | 0.073      | -            | -                | -                | -         |     1.72 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4377 | 2024-03-05 | ex-Sprout         | W   | 0.072      | -            | -                | -                | -         |     0.07 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4418 | 2024-03-03 | The Chosen Few    | L   | 0.059      | -            | -                | -                | -         |    -1.65 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4470 | 2024-02-29 | Aurora            | L   | 0.040      | -            | -                | -                | -         |    -0.05 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4476 | 2024-02-29 | HAVU              | W   | 0.039      | -            | -                | -                | -         |     0.15 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4484 | 2024-02-28 | FORZE             | L   | 0.033      | -            | -                | -                | -         |    -0.76 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4488 | 2024-02-28 | kONO              | W   | 0.032      | -            | -                | -                | -         |     0.29 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,614.68)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.761 | $7,000.00      | $5,328.97       |
| 2024-06-09 |      0.713 | $12,000.00     | $8,557.32       |
| 2024-03-20 |      0.173 | $10,000.00     | $1,728.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
