### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [56](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
<br />
Final Rank Value:  997.3<br />
<br />
Final Rank Value (997.3) = Starting Rank Value (1023.5) + Head To Head Adjustments (-26.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.178[<sup>2</sup>](#table1)

The average of these factors is 0.316<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1023.5
- 400 + ( ( 0.316 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1023.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       27 | 2024-08-13 | B8              | L   | 1.000      | -            | -                | -                | -         |   -11.77 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |       81 | 2024-08-12 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |   -11.79 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      269 | 2024-08-06 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -12.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      491 | 2024-07-31 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -11.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |      652 | 2024-07-26 | EYEBALLERS      | W   | 1.000      | 0.500        | -                | 0.614 (0.307)    | 0 (0.000) |     6.92 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |      922 | 2024-07-18 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -23.44 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |     1063 | 2024-07-16 | Insilio         | W   | 1.000      | 0.500        | 0.021 (0.010)    | 0.505 (0.252)    | 0 (0.000) |    10.95 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |     1330 | 2024-06-16 | 9z              | L   | 0.806      | -            | -                | -                | -         |    -2.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |     1382 | 2024-06-14 | RED Canids      | W   | 0.795      | 0.548        | 0.069 (0.030)    | 0.728 (0.317)    | 1 (0.795) |    15.69 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |     1385 | 2024-06-14 | Imperial        | W   | 0.794      | 0.548        | 0.213 (0.093)    | 0.653 (0.284)    | 1 (0.794) |    19.33 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |     1542 | 2024-06-09 | Sangal          | L   | 0.760      | -            | -                | -                | -         |    -6.30 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |     1736 | 2024-06-06 | SINNERS         | W   | 0.739      | 0.500        | 0.044 (0.016)    | 0.922 (0.341)    | 0 (0.000) |    11.53 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     1798 | 2024-06-05 | 3DMAX           | W   | 0.733      | 0.500        | 0.508 (0.186)    | 1.000 (0.366)    | 0 (0.000) |    21.76 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1930 | 2024-06-01 | ENCE            | L   | 0.706      | -            | -                | -                | -         |    -3.16 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1938 | 2024-06-01 | Zero Tenacity   | L   | 0.705      | -            | -                | -                | -         |    -8.41 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     2605 | 2024-05-09 | B8              | L   | 0.551      | -            | -                | -                | -         |    -8.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2767 | 2024-05-01 | Zero Tenacity   | L   | 0.498      | -            | -                | -                | -         |    -7.40 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     3087 | 2024-04-18 | ex-Guild Eagles | L   | 0.413      | -            | -                | -                | -         |   -10.26 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     3096 | 2024-04-18 | fnatic          | W   | 0.412      | 0.143        | 0.352 (0.021)    | -                | 0 (0.000) |    11.89 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     3166 | 2024-04-16 | BLEED           | L   | 0.400      | -            | -                | -                | -         |    -7.59 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     3299 | 2024-04-10 | RUSH B          | W   | 0.360      | 0.500        | -                | 0.377 (0.068)    | 0 (0.000) |     3.37 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     3353 | 2024-04-09 | Aurora          | W   | 0.353      | 0.500        | 0.387 (0.068)    | 0.737 (0.130)    | 0 (0.000) |    10.67 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     3359 | 2024-04-09 | Apeks           | L   | 0.352      | -            | -                | -                | -         |    -8.05 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     3387 | 2024-04-08 | GUN5            | W   | 0.346      | -            | -                | -                | 0 (0.000) |     0.33 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     3392 | 2024-04-08 | fnatic          | L   | 0.345      | -            | -                | -                | -         |    -0.86 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     3493 | 2024-04-04 | NOM             | W   | 0.319      | -            | -                | -                | -         |     0.51 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     3527 | 2024-04-03 | 9INE            | W   | 0.313      | -            | -                | -                | -         |     0.57 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3564 | 2024-04-02 | TSM             | W   | 0.306      | -            | -                | -                | -         |     1.16 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3630 | 2024-03-28 | EYEBALLERS      | L   | 0.272      | -            | -                | -                | -         |    -5.74 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     3802 | 2024-03-18 | FURIA           | L   | 0.206      | -            | -                | -                | -         |    -0.16 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     3819 | 2024-03-17 | ENCE            | L   | 0.200      | -            | -                | -                | -         |    -0.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     3834 | 2024-03-17 | SAW             | L   | 0.199      | -            | -                | -                | -         |    -0.48 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     3925 | 2024-03-13 | Sangal          | W   | 0.174      | 0.500        | 0.276 (0.024)    | 0.851 (0.074)    | -         |     3.71 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     3980 | 2024-03-11 | B8              | L   | 0.160      | -            | -                | -                | -         |    -2.32 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     3986 | 2024-03-11 | Apeks           | L   | 0.159      | -            | -                | -                | -         |    -3.68 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4098 | 2024-03-06 | 9 Pandas        | W   | 0.127      | 0.500        | 0.075 (0.005)    | 0.717 (0.046)    | -         |     1.79 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4135 | 2024-03-05 | FORZE           | W   | 0.120      | -            | -                | -                | -         |     1.09 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4141 | 2024-03-05 | Nemiga          | W   | 0.120      | 0.143        | 0.365 (0.006)    | -                | -         |     2.75 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4150 | 2024-03-05 | ex-Sprout       | W   | 0.119      | -            | -                | -                | -         |     0.11 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4191 | 2024-03-03 | The Chosen Few  | L   | 0.106      | -            | -                | -                | -         |    -2.97 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4243 | 2024-02-29 | Aurora          | L   | 0.087      | -            | -                | -                | -         |    -0.11 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4249 | 2024-02-29 | HAVU            | W   | 0.085      | -            | -                | -                | -         |     0.34 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4257 | 2024-02-28 | FORZE           | L   | 0.080      | -            | -                | -                | -         |    -1.83 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4261 | 2024-02-28 | kONO            | W   | 0.079      | -            | -                | -                | -         |     0.68 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,970.10)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.808 | $7,000.00      | $5,656.14       |
| 2024-06-09 |      0.760 | $12,000.00     | $9,118.19       |
| 2024-03-20 |      0.220 | $10,000.00     | $2,195.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
