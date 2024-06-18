### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [13](../standings_global.md)<br />
Regional Rank: [2]( ../standings_americas.md)<br />
Final Rank Value:  1669.9<br />
<br />
Final Rank Value (1669.9) = Starting Rank Value (1662.1) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.767[<sup>1</sup>](#table2)
- Bounty Collected: 0.606[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 0.765[<sup>2</sup>](#table1)

The average of these factors is 0.621<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1662.1
- 400 + ( ( 0.621 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1662.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      691 | 2024-05-29 | G2               | L   | 1.000      | -            | -                | -                | -         |    -7.28 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           52 |      717 | 2024-05-28 | Falcons          | W   | 1.000      | 0.624        | 0.381 (0.238)    | -                | 1 (1.000) |    12.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           51 |      735 | 2024-05-27 | 9z               | L   | 1.000      | -            | -                | -                | -         |   -23.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           50 |      748 | 2024-05-27 | Complexity       | W   | 1.000      | 0.624        | 0.426 (0.266)    | 0.442 (0.276)    | 1 (1.000) |    20.84 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           49 |      817 | 2024-05-23 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -10.67 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           48 |      863 | 2024-05-22 | Astralis         | W   | 1.000      | 0.769        | 0.533 (0.410)    | 0.501 (0.385)    | -         |    24.82 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           47 |      910 | 2024-05-21 | ENCE             | W   | 1.000      | 0.769        | 0.229 (0.176)    | 0.424 (0.326)    | -         |     6.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           46 |      966 | 2024-05-19 | AMKAL            | W   | 1.000      | 0.769        | -                | 0.613 (0.472)    | -         |     3.89 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           45 |      980 | 2024-05-18 | OG               | W   | 0.997      | 0.769        | 0.235 (0.180)    | 0.253 (0.194)    | -         |     3.33 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           44 |     1271 | 2024-05-10 | Astralis         | L   | 0.942      | -            | -                | -                | -         |    -5.33 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           43 |     1314 | 2024-05-08 | FlyQuest         | W   | 0.929      | 0.889        | -                | 0.476 (0.393)    | 1 (0.929) |     6.95 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           42 |     1382 | 2024-05-04 | MOUZ             | L   | 0.903      | -            | -                | -                | -         |    -3.40 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           41 |     1442 | 2024-05-01 | Monte            | W   | 0.883      | 0.889        | 0.189 (0.148)    | 0.674 (0.529)    | 1 (0.883) |     2.96 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           40 |     1467 | 2024-04-30 | FURIA            | W   | 0.876      | 0.889        | 0.245 (0.191)    | 0.521 (0.406)    | 1 (0.876) |    11.50 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           39 |     1710 | 2024-04-19 | M80              | L   | 0.805      | -            | -                | -                | -         |   -23.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           38 |     1760 | 2024-04-18 | M80              | W   | 0.798      | -            | -                | -                | -         |     1.85 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           37 |     1764 | 2024-04-18 | Legacy           | W   | 0.797      | -            | -                | -                | -         |     1.28 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |     1812 | 2024-04-17 | OMiT             | W   | 0.791      | -            | -                | -                | -         |     0.24 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |     1815 | 2024-04-17 | straykids        | W   | 0.790      | -            | -                | -                | -         |     0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1927 | 2024-04-12 | FaZe             | L   | 0.754      | -            | -                | -                | -         |    -3.75 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     2010 | 2024-04-10 | MOUZ             | L   | 0.740      | -            | -                | -                | -         |    -2.96 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     2090 | 2024-04-08 | G2               | W   | 0.727      | 0.624        | 0.756 (0.343)    | 0.508 (0.231)    | 1 (0.727) |    18.89 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     2101 | 2024-04-07 | HEROIC           | W   | 0.725      | 0.624        | 0.354 (0.160)    | 0.545 (0.247)    | 1 (0.725) |    15.37 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     2773 | 2024-03-07 | SAW              | L   | 0.516      | -            | -                | -                | -         |   -13.61 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     2855 | 2024-03-04 | Complexity       | L   | 0.497      | -            | -                | -                | -         |    -4.81 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     2892 | 2024-03-03 | BOSS             | W   | 0.489      | -            | -                | -                | 1 (0.489) |     0.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     2905 | 2024-03-02 | FURIA            | L   | 0.482      | -            | -                | -                | -         |    -7.78 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2919 | 2024-03-01 | BESTIA           | W   | 0.477      | -            | -                | -                | 1 (0.477) |     0.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2990 | 2024-02-26 | Nouns            | W   | 0.452      | -            | -                | -                | -         |     0.33 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2992 | 2024-02-26 | BOSS             | W   | 0.451      | -            | -                | -                | -         |     0.16 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     3003 | 2024-02-25 | Wildcard         | W   | 0.445      | -            | -                | -                | -         |     0.33 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     3009 | 2024-02-25 | Nouns            | L   | 0.444      | -            | -                | -                | -         |   -13.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     3069 | 2024-02-22 | Party Astronauts | W   | 0.425      | -            | -                | -                | -         |     0.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     3073 | 2024-02-22 | MIGHT            | W   | 0.424      | -            | -                | -                | -         |     0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     3077 | 2024-02-22 | ex-CatEvil       | W   | 0.424      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     3583 | 2024-01-28 | G2               | L   | 0.256      | -            | -                | -                | -         |    -1.43 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     3597 | 2024-01-27 | FaZe             | L   | 0.249      | -            | -                | -                | -         |    -1.23 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     3639 | 2024-01-25 | GamerLegion      | W   | 0.234      | -            | -                | -                | 1 (0.234) |     0.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     3651 | 2024-01-24 | Spirit           | W   | 0.229      | 0.581        | 1.000 (0.133)    | -                | -         |     6.23 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3745 | 2024-01-20 | M80              | L   | 0.206      | -            | -                | -                | -         |    -5.79 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3794 | 2024-01-19 | Wildcard         | W   | 0.198      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3804 | 2024-01-19 | BOSS             | W   | 0.197      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3955 | 2024-01-16 | Elevate          | W   | 0.178      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3959 | 2024-01-16 | huge sweaty      | W   | 0.178      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3962 | 2024-01-16 | Wildcard         | W   | 0.177      | -            | -                | -                | -         |     0.11 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     4004 | 2024-01-15 | LOS              | W   | 0.171      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     4041 | 2024-01-14 | Party Astronauts | W   | 0.164      | -            | -                | -                | -         |     0.12 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     4062 | 2024-01-13 | Elevate          | W   | 0.158      | -            | -                | -                | -         |     0.06 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     4104 | 2024-01-12 | M80              | L   | 0.152      | -            | -                | -                | -         |    -4.29 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     4110 | 2024-01-12 | Nouns            | W   | 0.151      | -            | -                | -                | -         |     0.09 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     4191 | 2024-01-09 | NRG              | W   | 0.133      | -            | -                | -                | -         |     0.05 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     4193 | 2024-01-09 | vagrants         | W   | 0.132      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     4196 | 2024-01-09 | LOS              | W   | 0.132      | -            | -                | -                | -         |     0.00 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($149,622.19)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-23 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-05-12 |      0.956 | $32,000.00     | $30,576.91      |
| 2024-04-14 |      0.767 | $10,000.00     | $7,674.06       |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |
| 2024-01-28 |      0.256 | $10,500.00     | $2,687.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
