### Roster Details<br />
Team Name: M80<br />
Roster: Lake, reck, s1n, slaxz-, Swisher<br />
Global Rank: [27](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [7]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1276.3<br />
<br />
Final Rank Value (1276.3) = Starting Rank Value (1227.5) + Head To Head Adjustments (48.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.579[<sup>1</sup>](#table2)
- Bounty Collected: 0.495[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.331[<sup>2</sup>](#table1)

The average of these factors is 0.402<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1227.5
- 400 + ( ( 0.402 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1227.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      190 | 2024-07-31 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.10 | Lake, reck, s1n, slaxz-, Swisher        |
|           53 |      196 | 2024-07-31 | Limitless        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.11 | Lake, reck, s1n, slaxz-, Swisher        |
|           52 |      240 | 2024-07-30 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.376 (0.179)    | 0 (0.000) |     2.08 | Lake, reck, s1n, slaxz-, Swisher        |
|           51 |      245 | 2024-07-30 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.376 (0.179)    | 0 (0.000) |     2.13 | Lake, reck, s1n, slaxz-, Swisher        |
|           50 |      665 | 2024-07-18 | The MongolZ      | L   | 1.000      | -            | -                | -                | -         |    -1.70 | Lake, reck, s1n, slaxz-, Swisher        |
|           49 |      678 | 2024-07-18 | Complexity       | W   | 1.000      | 1.000        | 0.341 (0.341)    | 0.364 (0.364)    | 1 (1.000) |    27.28 | Lake, reck, s1n, slaxz-, Swisher        |
|           48 |      739 | 2024-07-17 | Vitality         | L   | 1.000      | -            | -                | -                | -         |    -1.00 | Lake, reck, s1n, slaxz-, Swisher        |
|           47 |     1260 | 2024-06-09 | Wildcard         | W   | 0.816      | 0.477        | 0.055 (0.021)    | 0.484 (0.188)    | -         |     4.67 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           46 |     1274 | 2024-06-09 | NRG              | L   | 0.814      | -            | -                | -                | -         |   -22.00 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           45 |     1327 | 2024-06-08 | Legacy           | W   | 0.808      | 0.143        | 0.122 (0.014)    | -                | -         |     5.12 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           44 |     1434 | 2024-06-06 | Wildcard         | W   | 0.796      | 0.477        | 0.055 (0.021)    | 0.484 (0.184)    | -         |     4.21 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           43 |     1454 | 2024-06-06 | Wildcard         | W   | 0.794      | -            | -                | -                | -         |     4.68 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           42 |     1464 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.794      | -            | -                | -                | -         |     1.22 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           41 |     1504 | 2024-06-05 | Nouns            | W   | 0.789      | 0.477        | 0.057 (0.021)    | 0.566 (0.213)    | -         |     4.67 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           40 |     1761 | 2024-05-28 | HEROIC           | L   | 0.734      | -            | -                | -                | -         |    -3.58 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           39 |     1779 | 2024-05-27 | FaZe             | L   | 0.727      | -            | -                | -                | -         |    -1.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           38 |     1834 | 2024-05-24 | Nouns            | W   | 0.709      | 0.384        | 0.057 (0.016)    | -                | -         |     4.00 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           37 |     1849 | 2024-05-23 | Wildcard         | W   | 0.702      | 0.384        | 0.055 (0.015)    | -                | -         |     3.89 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           36 |     1874 | 2024-05-22 | Party Astronauts | L   | 0.695      | -            | -                | -                | -         |   -18.49 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           35 |     1879 | 2024-05-22 | Party Astronauts | W   | 0.695      | 0.477        | 0.041 (0.014)    | 0.510 (0.169)    | -         |     3.27 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           34 |     1885 | 2024-05-22 | Mythic           | W   | 0.694      | -            | -                | -                | -         |     1.63 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           33 |     1949 | 2024-05-20 | NRG              | W   | 0.682      | 0.477        | -                | 0.524 (0.171)    | -         |     3.19 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           32 |     1954 | 2024-05-20 | NRG              | W   | 0.682      | 0.477        | -                | 0.524 (0.171)    | -         |     3.29 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           31 |     1964 | 2024-05-20 | E-Xolos LAZER    | W   | 0.681      | -            | -                | -                | -         |     1.45 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           30 |     1988 | 2024-05-19 | BOSS             | W   | 0.675      | -            | -                | -                | -         |     1.54 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           29 |     1990 | 2024-05-19 | BOSS             | W   | 0.675      | -            | -                | -                | -         |     1.56 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           28 |     2013 | 2024-05-18 | Nouns            | L   | 0.668      | -            | -                | -                | -         |   -18.30 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           27 |     2047 | 2024-05-17 | DETONATE         | W   | 0.662      | -            | -                | -                | -         |     0.34 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           26 |     2120 | 2024-05-15 | Take Flyte       | W   | 0.649      | -            | -                | -                | -         |     0.85 | malbsMd, reck, slaxz-, stamina, Swisher |
|           25 |     2126 | 2024-05-15 | Take Flyte       | W   | 0.649      | -            | -                | -                | -         |     0.86 | malbsMd, reck, slaxz-, stamina, Swisher |
|           24 |     2169 | 2024-05-14 | Elevate          | W   | 0.643      | -            | -                | -                | -         |     3.71 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           23 |     2175 | 2024-05-14 | Elevate          | W   | 0.642      | -            | -                | -                | -         |     3.84 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           22 |     2298 | 2024-05-10 | Limitless        | W   | 0.616      | -            | -                | -                | -         |     0.61 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           21 |     2300 | 2024-05-10 | Limitless        | W   | 0.616      | -            | -                | -                | -         |     0.61 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           20 |     2315 | 2024-05-09 | LAG              | W   | 0.609      | -            | -                | -                | -         |     1.76 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           19 |     2320 | 2024-05-09 | LAG              | W   | 0.609      | -            | -                | -                | -         |     1.79 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           18 |     2546 | 2024-04-28 | G2               | L   | 0.534      | -            | -                | -                | -         |    -0.33 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           17 |     2571 | 2024-04-27 | TYLOO            | W   | 0.526      | -            | -                | -                | 1 (0.526) |     1.11 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           16 |     2591 | 2024-04-26 | BetBoom          | L   | 0.521      | -            | -                | -                | -         |    -4.85 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           15 |     2601 | 2024-04-26 | G2               | W   | 0.519      | 0.889        | 1.000 (0.462)    | 0.478 (0.221)    | 1 (0.519) |    16.07 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           14 |     2626 | 2024-04-25 | Sharks           | W   | 0.513      | -            | -                | -                | 1 (0.513) |     1.12 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           13 |     2660 | 2024-04-23 | BetBoom          | L   | 0.501      | -            | -                | -                | -         |    -4.65 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           12 |     2746 | 2024-04-19 | Liquid           | W   | 0.476      | 0.143        | 0.383 (0.026)    | -                | -         |    13.26 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           11 |     2753 | 2024-04-19 | Legacy           | W   | 0.475      | -            | -                | -                | -         |     3.71 | malbsMd, reck, s1n, slaxz-, Swisher     |
|           10 |     2796 | 2024-04-18 | Liquid           | L   | 0.469      | -            | -                | -                | -         |    -1.64 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            9 |     2801 | 2024-04-18 | Elevate          | W   | 0.468      | -            | -                | -                | -         |     3.41 | malbsMd, reck, s1n, slaxz-, Swisher     |
|            8 |     3370 | 2024-03-27 | Phoenix          | W   | 0.322      | -            | -                | -                | -         |     0.64 | malbsMd, reck, s1n, stamina, Swisher    |
|            7 |     3375 | 2024-03-27 | Phoenix          | W   | 0.322      | -            | -                | -                | -         |     0.64 | malbsMd, reck, s1n, stamina, Swisher    |
|            6 |     3636 | 2024-03-13 | Wildcard         | L   | 0.229      | -            | -                | -                | -         |    -6.17 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            5 |     3638 | 2024-03-13 | Wildcard         | W   | 0.229      | -            | -                | -                | -         |     1.06 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            4 |     3891 | 2024-03-04 | Legacy           | L   | 0.167      | -            | -                | -                | -         |    -4.04 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            3 |     3917 | 2024-03-03 | Wildcard         | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.75 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            2 |     3942 | 2024-03-02 | Imperial         | L   | 0.153      | -            | -                | -                | -         |    -2.24 | dephh, malbsMd, reck, slaxz-, Swisher   |
|            1 |     3961 | 2024-03-01 | ODDIK            | W   | 0.147      | -            | -                | -                | 1 (0.147) |     1.04 | dephh, malbsMd, reck, slaxz-, Swisher   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,171.39)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-09 |      0.816 | $25,000.00     | $20,395.91      |
| 2024-06-02 |      0.768 | $4,000.00      | $3,070.86       |
| 2024-05-24 |      0.709 | $20,000.00     | $14,185.80      |
| 2024-05-12 |      0.627 | $12,000.00     | $7,518.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
