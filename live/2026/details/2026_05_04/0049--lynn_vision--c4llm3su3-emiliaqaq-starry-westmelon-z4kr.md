### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR<br />
Global Rank: [49](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [3]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  1249.1<br />
<br />
Final Rank Value (1249.1) = Starting Rank Value (1144.4) + Head To Head Adjustments (104.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.749[<sup>2</sup>](#table1)

The average of these factors is 0.401<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1144.4
- 400 + ( ( 0.401 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1144.4


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
|           31 |      848 | 2026-04-05 | TYLOO             | W   | 1.000      | 0.352        | 0.105 (0.037)    | 0.447 (0.157)    | 1 (1.000) |    20.55 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           30 |      939 | 2026-04-04 | TYLOO             | W   | 0.998      | 0.352        | 0.105 (0.037)    | 0.447 (0.157)    | 1 (0.998) |    22.50 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           29 |     1026 | 2026-04-03 | Rare Atom         | W   | 0.991      | 0.352        | 0.021 (0.007)    | 0.422 (0.147)    | 1 (0.991) |    10.99 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           28 |     1364 | 2026-03-30 | Change The Game   | W   | 0.966      | 0.352        | 0.007 (0.002)    | 0.247 (0.084)    | 1 (0.966) |     4.04 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           27 |     1379 | 2026-03-30 | Chaos             | W   | 0.964      | -            | -                | -                | 1 (0.964) |     0.68 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           26 |     1859 | 2026-03-22 | Rare Atom         | W   | 0.911      | 0.284        | 0.021 (0.005)    | 0.422 (0.109)    | 1 (0.911) |    12.12 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           25 |     1922 | 2026-03-20 | Kaleido           | W   | 0.904      | 0.284        | 0.019 (0.005)    | 0.302 (0.078)    | 1 (0.904) |     6.56 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           24 |     2332 | 2026-03-12 | Chinggis Warriors | W   | 0.846      | 0.143        | 0.022 (0.003)    | -                | -         |    11.76 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           23 |     2344 | 2026-03-12 | Alter Ego         | W   | 0.845      | -            | -                | -                | -         |     4.94 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           22 |     2352 | 2026-03-11 | The Huns          | W   | 0.843      | -            | -                | -                | -         |    14.88 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           21 |     2381 | 2026-03-11 | Kaleido           | W   | 0.838      | -            | -                | -                | -         |     7.34 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           20 |     2424 | 2026-03-10 | NEXVOID           | W   | 0.832      | -            | -                | -                | -         |    13.91 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           19 |     2431 | 2026-03-09 | Ground Zero       | W   | 0.830      | -            | -                | -                | -         |     6.58 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           18 |     2498 | 2026-03-08 | Alter Ego         | L   | 0.824      | -            | -                | -                | -         |   -21.50 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           17 |     2987 | 2026-02-26 | The Huns          | L   | 0.757      | -            | -                | -                | -         |   -12.07 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           16 |     3027 | 2026-02-26 | Rare Atom         | L   | 0.753      | -            | -                | -                | -         |   -11.14 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           15 |     3053 | 2026-02-26 | Chinggis Warriors | W   | 0.751      | 0.624        | 0.022 (0.010)    | 0.543 (0.254)    | -         |    10.97 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           14 |     3907 | 2026-02-08 | TYLOO             | L   | 0.633      | -            | -                | -                | -         |    -3.91 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           13 |     3933 | 2026-02-07 | Kaleido           | W   | 0.625      | 0.769        | 0.019 (0.009)    | 0.302 (0.145)    | -         |     4.48 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           12 |     3974 | 2026-02-06 | Alter Ego         | W   | 0.618      | 0.769        | -                | 0.252 (0.120)    | -         |     2.96 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           11 |     4335 | 2026-01-24 | JiJieHao          | L   | 0.532      | -            | -                | -                | -         |    -7.25 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|           10 |     4371 | 2026-01-23 | BMZ               | W   | 0.527      | 0.423        | 0.013 (0.003)    | 0.371 (0.082)    | 1 (0.527) |     5.89 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            9 |     4514 | 2026-01-18 | Walk The Talk     | W   | 0.496      | -            | -                | -                | -         |     0.24 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            8 |     5370 | 2025-11-25 | The Huns          | L   | 0.134      | -            | -                | -                | -         |    -2.06 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            7 |     5395 | 2025-11-24 | Ninjas in Pyjamas | L   | 0.128      | -            | -                | -                | -         |    -0.77 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            6 |     5409 | 2025-11-24 | FaZe              | L   | 0.127      | -            | -                | -                | -         |    -0.33 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            5 |     5537 | 2025-11-20 | Rare Atom         | W   | 0.101      | -            | -                | -                | -         |     0.17 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            4 |     5580 | 2025-11-19 | Chinggis Warriors | W   | 0.093      | -            | -                | -                | -         |     1.52 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            3 |     5626 | 2025-11-16 | Rare Atom         | W   | 0.071      | -            | -                | -                | 1 (0.071) |     0.12 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            2 |     5650 | 2025-11-15 | 9INE              | W   | 0.064      | -            | -                | -                | 1 (0.064) |     0.09 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |
|            1 |     5673 | 2025-11-13 | Last Bullet       | W   | 0.057      | -            | -                | -                | -         |     0.49 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4KR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,069.49)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $5,750.00      | $5,750.00       |
| 2026-03-22 |      0.911 | $1,650.00      | $1,503.42       |
| 2026-01-25 |      0.539 | $4,300.00      | $2,317.57       |
| 2025-11-16 |      0.071 | $21,064.00     | $1,498.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
