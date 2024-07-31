### Roster Details<br />
Team Name: Liquid<br />
Roster: jks, NAF, Twistzz, ultimate, YEKINDAR<br />
Global Rank: [15](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [3]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1532.4<br />
<br />
Final Rank Value (1532.4) = Starting Rank Value (1456.7) + Head To Head Adjustments (75.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.671[<sup>1</sup>](#table2)
- Bounty Collected: 0.545[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.646[<sup>2</sup>](#table1)

The average of these factors is 0.512<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1456.7
- 400 + ( ( 0.512 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1456.7


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
|           36 |        4 | 2024-07-31 | Virtus.pro       | W   | 1.000      | 0.581        | 0.483 (0.281)    | 0.327 (0.190)    | 1 (1.000) |    23.03 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           35 |     1519 | 2024-05-29 | G2               | L   | 0.781      | -            | -                | -                | -         |    -2.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           34 |     1545 | 2024-05-28 | Falcons          | W   | 0.775      | 0.624        | 0.208 (0.100)    | 0.250 (0.121)    | 1 (0.775) |    10.28 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           33 |     1563 | 2024-05-27 | 9z               | L   | 0.769      | -            | -                | -                | -         |   -13.74 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           32 |     1576 | 2024-05-27 | Complexity       | W   | 0.766      | 0.624        | 0.319 (0.152)    | 0.367 (0.176)    | 1 (0.766) |    17.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           31 |     1645 | 2024-05-23 | Eternal Fire     | L   | 0.739      | -            | -                | -                | -         |    -5.61 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           30 |     1691 | 2024-05-22 | Astralis         | W   | 0.731      | 0.769        | 0.360 (0.202)    | 0.386 (0.217)    | -         |    18.08 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           29 |     1738 | 2024-05-21 | ENCE             | W   | 0.724      | 0.769        | 0.175 (0.097)    | 0.404 (0.225)    | -         |     9.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           28 |     1794 | 2024-05-19 | AMKAL            | W   | 0.712      | 0.769        | 0.132 (0.072)    | 0.484 (0.265)    | -         |     4.04 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           27 |     1808 | 2024-05-18 | OG               | W   | 0.707      | 0.769        | 0.144 (0.078)    | -                | -         |     2.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           26 |     2099 | 2024-05-10 | Astralis         | L   | 0.652      | -            | -                | -                | -         |    -4.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           25 |     2142 | 2024-05-08 | FlyQuest         | W   | 0.639      | 0.889        | 0.106 (0.060)    | 0.298 (0.169)    | 1 (0.639) |     4.24 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           24 |     2210 | 2024-05-04 | MOUZ             | L   | 0.613      | -            | -                | -                | -         |    -1.74 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           23 |     2270 | 2024-05-01 | Monte            | W   | 0.593      | -            | -                | -                | 1 (0.593) |     1.41 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     2295 | 2024-04-30 | FURIA            | W   | 0.586      | 0.889        | 0.286 (0.149)    | 0.495 (0.258)    | 1 (0.586) |    14.23 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     2538 | 2024-04-19 | M80              | L   | 0.515      | -            | -                | -                | -         |   -12.61 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     2588 | 2024-04-18 | M80              | W   | 0.509      | -            | -                | -                | -         |     3.50 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     2592 | 2024-04-18 | Legacy           | W   | 0.507      | -            | -                | -                | -         |     1.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     2640 | 2024-04-17 | Akimbo           | W   | 0.501      | -            | -                | -                | -         |     0.32 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     2643 | 2024-04-17 | straykids        | W   | 0.500      | -            | -                | -                | -         |     0.17 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     2755 | 2024-04-12 | FaZe             | L   | 0.465      | -            | -                | -                | -         |    -2.72 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     2838 | 2024-04-10 | MOUZ             | L   | 0.450      | -            | -                | -                | -         |    -1.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     2918 | 2024-04-08 | G2               | W   | 0.438      | 0.624        | 1.000 (0.273)    | 0.492 (0.134)    | 1 (0.438) |    13.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     2929 | 2024-04-07 | HEROIC           | W   | 0.436      | 0.624        | -                | 0.382 (0.104)    | 1 (0.436) |     9.26 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     3600 | 2024-03-07 | SAW              | L   | 0.226      | -            | -                | -                | -         |    -5.78 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     3682 | 2024-03-04 | Complexity       | L   | 0.207      | -            | -                | -                | -         |    -1.67 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     3719 | 2024-03-03 | BOSS             | W   | 0.199      | -            | -                | -                | 1 (0.199) |     0.18 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     3732 | 2024-03-02 | FURIA            | L   | 0.192      | -            | -                | -                | -         |    -0.98 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     3746 | 2024-03-01 | BESTIA           | W   | 0.187      | -            | -                | -                | 1 (0.187) |     0.50 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     3817 | 2024-02-26 | Nouns            | W   | 0.162      | -            | -                | -                | -         |     0.25 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     3819 | 2024-02-26 | BOSS             | W   | 0.161      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     3830 | 2024-02-25 | Wildcard         | W   | 0.156      | -            | -                | -                | -         |     0.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     3836 | 2024-02-25 | Nouns            | L   | 0.154      | -            | -                | -                | -         |    -4.64 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     3896 | 2024-02-22 | Party Astronauts | W   | 0.135      | -            | -                | -                | -         |     0.22 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     3900 | 2024-02-22 | MIGHT            | W   | 0.134      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     3904 | 2024-02-22 | ex-CatEvil       | W   | 0.134      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,079.59)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.807 | $6,000.00      | $4,841.28       |
| 2024-05-23 |      0.739 | $100,000.00    | $73,924.44      |
| 2024-05-12 |      0.666 | $32,000.00     | $21,303.44      |
| 2024-04-14 |      0.478 | $10,000.00     | $4,776.10       |
| 2024-03-10 |      0.247 | $5,000.00      | $1,234.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
