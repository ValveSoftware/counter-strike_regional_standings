### Roster Details<br />
Team Name: Liquid<br />
Roster: cadiaN, NAF, skullz, Twistzz, YEKINDAR<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1510.9<br />
<br />
Final Rank Value (1510.9) = Starting Rank Value (1447.9) + Head To Head Adjustments (63.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.721[<sup>1</sup>](#table2)
- Bounty Collected: 0.553[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.596[<sup>2</sup>](#table1)

The average of these factors is 0.518<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1447.9
- 400 + ( ( 0.518 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1447.9


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
|           37 |     1277 | 2024-05-29 | G2               | L   | 0.829      | -            | -                | -                | -         |    -2.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           36 |     1303 | 2024-05-28 | Falcons          | W   | 0.822      | 0.624        | 0.276 (0.141)    | 0.246 (0.126)    | 1 (0.822) |    10.66 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           35 |     1321 | 2024-05-27 | 9z               | L   | 0.816      | -            | -                | -                | -         |   -13.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1334 | 2024-05-27 | Complexity       | W   | 0.814      | 0.624        | 0.405 (0.206)    | 0.378 (0.192)    | 1 (0.814) |    19.32 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     1403 | 2024-05-23 | Eternal Fire     | L   | 0.787      | -            | -                | -                | -         |    -7.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     1449 | 2024-05-22 | Astralis         | W   | 0.779      | 0.769        | 0.457 (0.274)    | 0.398 (0.238)    | 0 (0.000) |    19.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     1496 | 2024-05-21 | ENCE             | W   | 0.771      | 0.769        | 0.171 (0.101)    | 0.380 (0.225)    | -         |     7.72 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     1552 | 2024-05-19 | AMKAL            | W   | 0.759      | 0.769        | 0.111 (0.065)    | 0.515 (0.301)    | -         |     3.85 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     1566 | 2024-05-18 | OG               | W   | 0.754      | 0.769        | 0.170 (0.098)    | -                | -         |     2.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     1857 | 2024-05-10 | Astralis         | L   | 0.699      | -            | -                | -                | -         |    -3.79 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     1900 | 2024-05-08 | FlyQuest         | W   | 0.686      | 0.889        | 0.133 (0.081)    | 0.349 (0.213)    | 1 (0.686) |     5.79 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     1968 | 2024-05-04 | MOUZ             | L   | 0.660      | -            | -                | -                | -         |    -1.51 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2028 | 2024-05-01 | Monte            | W   | 0.640      | 0.889        | -                | 0.210 (0.119)    | 1 (0.640) |     1.85 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2053 | 2024-04-30 | FURIA            | W   | 0.634      | 0.889        | 0.355 (0.200)    | 0.563 (0.317)    | 1 (0.634) |    16.16 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     2296 | 2024-04-19 | M80              | L   | 0.562      | -            | -                | -                | -         |   -12.89 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     2346 | 2024-04-18 | M80              | W   | 0.556      | -            | -                | -                | -         |     4.68 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     2350 | 2024-04-18 | Legacy           | W   | 0.555      | -            | -                | -                | -         |     1.64 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     2398 | 2024-04-17 | OMiT             | W   | 0.548      | -            | -                | -                | -         |     0.39 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     2401 | 2024-04-17 | straykids        | W   | 0.548      | -            | -                | -                | -         |     0.20 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     2513 | 2024-04-12 | FaZe             | L   | 0.512      | -            | -                | -                | -         |    -2.21 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     2596 | 2024-04-10 | MOUZ             | L   | 0.498      | -            | -                | -                | -         |    -1.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     2676 | 2024-04-08 | G2               | W   | 0.485      | 0.624        | 1.000 (0.303)    | 0.515 (0.156)    | 1 (0.485) |    14.51 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     2687 | 2024-04-07 | HEROIC           | W   | 0.483      | 0.624        | 0.272 (0.082)    | 0.404 (0.122)    | 1 (0.483) |    10.96 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     3358 | 2024-03-07 | SAW              | L   | 0.273      | -            | -                | -                | -         |    -6.86 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     3440 | 2024-03-04 | Complexity       | L   | 0.255      | -            | -                | -                | -         |    -1.63 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3477 | 2024-03-03 | BOSS             | W   | 0.246      | -            | -                | -                | 1 (0.246) |     0.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3490 | 2024-03-02 | FURIA            | L   | 0.240      | -            | -                | -                | -         |    -0.93 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3504 | 2024-03-01 | BESTIA           | W   | 0.235      | -            | -                | -                | 1 (0.235) |     0.70 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3575 | 2024-02-26 | Nouns            | W   | 0.209      | -            | -                | -                | -         |     0.35 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     3577 | 2024-02-26 | BOSS             | W   | 0.208      | -            | -                | -                | -         |     0.21 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     3588 | 2024-02-25 | Wildcard         | W   | 0.203      | -            | -                | -                | -         |     0.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     3594 | 2024-02-25 | Nouns            | L   | 0.202      | -            | -                | -                | -         |    -6.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     3654 | 2024-02-22 | Party Astronauts | W   | 0.183      | -            | -                | -                | -         |     0.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     3658 | 2024-02-22 | MIGHT            | W   | 0.182      | -            | -                | -                | -         |     0.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     3662 | 2024-02-22 | ex-CatEvil       | W   | 0.181      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     4168 | 2024-01-28 | G2               | L   | 0.013      | -            | -                | -                | -         |    -0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     4182 | 2024-01-27 | FaZe             | L   | 0.007      | -            | -                | -                | -         |    -0.03 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($113,456.16)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.854 | $6,000.00      | $5,125.00       |
| 2024-05-23 |      0.787 | $100,000.00    | $78,653.20      |
| 2024-05-12 |      0.713 | $32,000.00     | $22,816.64      |
| 2024-04-14 |      0.525 | $10,000.00     | $5,248.97       |
| 2024-03-10 |      0.294 | $5,000.00      | $1,470.78       |
| 2024-01-28 |      0.013 | $10,500.00     | $141.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
