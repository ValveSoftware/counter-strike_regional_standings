### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, siuhy, torzsi, xertioN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1927.8<br />
<br />
Final Rank Value (1927.8) = Starting Rank Value (1919.4) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.700[<sup>2</sup>](#table1)
- Opponent Network: 0.368[<sup>2</sup>](#table1)
- LAN Wins: 0.934[<sup>2</sup>](#table1)

The average of these factors is 0.751<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1919.4
- 400 + ( ( 0.751 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1919.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      119 | 2024-07-20 | Natus Vincere      | L   | 1.000      | -            | -                | -                | -         |   -14.75 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      159 | 2024-07-19 | FURIA              | W   | 1.000      | 1.000        | 0.355 (0.355)    | 0.563 (0.563)    | 1 (1.000) |     5.05 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      294 | 2024-07-17 | Sashi              | W   | 1.000      | 1.000        | 0.234 (0.234)    | 1.000 (1.000)    | 1 (1.000) |     0.43 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           29 |     1301 | 2024-05-28 | G2                 | L   | 0.822      | -            | -                | -                | -         |   -13.98 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           28 |     1322 | 2024-05-27 | Complexity         | W   | 0.816      | -            | -                | -                | 1 (0.816) |     4.90 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           27 |     1333 | 2024-05-27 | 9z                 | L   | 0.814      | -            | -                | -                | -         |   -23.97 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           26 |     1550 | 2024-05-19 | Spirit             | W   | 0.759      | 0.769        | 1.000 (0.584)    | 0.433 (0.253)    | 1 (0.759) |    10.38 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           25 |     1578 | 2024-05-18 | HEROIC             | W   | 0.753      | 0.769        | -                | 0.404 (0.234)    | 1 (0.753) |     2.87 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1657 | 2024-05-16 | Virtus.pro         | W   | 0.738      | 0.769        | 0.595 (0.338)    | 0.374 (0.212)    | 1 (0.738) |     5.79 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           23 |     1762 | 2024-05-14 | BetBoom            | W   | 0.726      | 0.769        | -                | 0.642 (0.358)    | 1 (0.726) |     1.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           22 |     1805 | 2024-05-12 | Vitality           | W   | 0.713      | 0.889        | 0.749 (0.474)    | 0.381 (0.242)    | 1 (0.713) |     9.57 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           21 |     1825 | 2024-05-11 | Complexity         | W   | 0.707      | 0.889        | 0.405 (0.254)    | 0.378 (0.238)    | 1 (0.707) |     4.98 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           20 |     1875 | 2024-05-09 | G2                 | W   | 0.694      | 0.889        | 1.000 (0.617)    | 0.515 (0.317)    | 1 (0.694) |    10.99 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           19 |     1968 | 2024-05-04 | Liquid             | W   | 0.660      | 0.889        | 0.411 (0.241)    | 0.459 (0.269)    | -         |     1.51 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           18 |     2037 | 2024-05-01 | GamerLegion        | W   | 0.639      | -            | -                | -                | -         |     0.28 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           17 |     2067 | 2024-04-30 | Bad News Kangaroos | W   | 0.632      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           16 |     2486 | 2024-04-14 | FaZe               | L   | 0.525      | -            | -                | -                | -         |   -11.20 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           15 |     2503 | 2024-04-13 | G2                 | W   | 0.518      | 0.624        | 1.000 (0.323)    | -                | -         |     9.10 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           14 |     2596 | 2024-04-10 | Liquid             | W   | 0.498      | -            | -                | -                | -         |     1.08 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           13 |     2666 | 2024-04-08 | FURIA              | W   | 0.486      | -            | -                | -                | -         |     4.40 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           12 |     2684 | 2024-04-08 | TYLOO              | W   | 0.483      | -            | -                | -                | -         |     0.03 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           11 |     2885 | 2024-03-29 | G2                 | L   | 0.421      | -            | -                | -                | -         |    -5.59 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|           10 |     3008 | 2024-03-22 | Complexity         | W   | 0.372      | -            | -                | -                | -         |     2.47 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            9 |     3028 | 2024-03-21 | Eternal Fire       | W   | 0.366      | 1.000        | 0.833 (0.305)    | -                | -         |     2.29 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            8 |     3039 | 2024-03-21 | Gaimin Gladiators  | W   | 0.365      | -            | -                | -                | -         |     0.09 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            7 |     3718 | 2024-02-20 | Spirit             | W   | 0.166      | -            | -                | -                | -         |     2.60 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            6 |     3740 | 2024-02-19 | Gaimin Gladiators  | W   | 0.160      | -            | -                | -                | -         |     0.04 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            5 |     3753 | 2024-02-19 | ex-Guild Eagles    | W   | 0.158      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            4 |     3947 | 2024-02-10 | FaZe               | L   | 0.099      | -            | -                | -                | -         |    -2.14 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            3 |     3990 | 2024-02-06 | ENCE               | W   | 0.074      | -            | -                | -                | -         |     0.13 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            2 |     4002 | 2024-02-05 | GamerLegion        | W   | 0.066      | -            | -                | -                | -         |     0.01 | Brollan, Jimpphat, siuhy, torzsi, xertioN |
|            1 |     4025 | 2024-02-04 | Cloud9             | W   | 0.059      | -            | -                | -                | -         |     0.02 | Brollan, Jimpphat, siuhy, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($488,338.47)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-02 |      0.854 | $5,000.00      | $4,270.84       |
| 2024-05-19 |      0.759 | $300,000.00    | $227,750.58     |
| 2024-05-12 |      0.713 | $170,000.00    | $121,213.41     |
| 2024-04-14 |      0.525 | $42,000.00     | $22,045.68      |
| 2024-03-31 |      0.434 | $45,000.00     | $19,521.14      |
| 2024-02-11 |      0.107 | $80,000.00     | $8,536.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
