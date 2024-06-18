### Roster Details<br />
Team Name: Elevate<br />
Roster: dare, dea, Peeping, shane, snav<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [71](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  991.5<br />
<br />
Final Rank Value (991.5) = Starting Rank Value (879.0) + Head To Head Adjustments (112.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 879.0
- 400 + ( ( 0.236 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 879.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |       10 | 2024-06-16 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -10.49 | dare, dea, Peeping, shane, snav              |
|           65 |       33 | 2024-06-15 | BOSS             | W   | 1.000      | 0.384        | 0.021 (0.008)    | 0.386 (0.148)    | 0 (0.000) |     8.14 | dare, dea, Peeping, shane, snav              |
|           64 |       68 | 2024-06-14 | FLUFFY AIMERS    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.35 | dare, dea, Peeping, shane, snav              |
|           63 |      346 | 2024-06-07 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.81 | dare, dea, Peeping, shane, snav              |
|           62 |      351 | 2024-06-07 | Nouns            | W   | 1.000      | 0.143        | 0.081 (0.012)    | -                | 0 (0.000) |    17.87 | dare, dea, Peeping, shane, snav              |
|           61 |      355 | 2024-06-07 | Legacy           | L   | 1.000      | -            | -                | -                | -         |   -10.70 | dare, dea, Peeping, shane, snav              |
|           60 |      395 | 2024-06-06 | Nouns            | L   | 1.000      | -            | -                | -                | -         |   -13.16 | dare, dea, Peeping, shane, snav              |
|           59 |      407 | 2024-06-06 | FlyQuest RED     | W   | 1.000      | 0.384        | 0.027 (0.010)    | -                | 0 (0.000) |     8.13 | dare, dea, Peeping, shane, snav              |
|           58 |      464 | 2024-06-05 | Mythic           | W   | 1.000      | 0.477        | -                | 0.377 (0.180)    | 0 (0.000) |    11.33 | dare, dea, Peeping, shane, snav              |
|           57 |      516 | 2024-06-04 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -15.10 | dare, dea, Peeping, shane, snav              |
|           56 |      829 | 2024-05-22 | NRG              | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.507 (0.242)    | 0 (0.000) |    14.96 | dare, dea, Peeping, shane, snav              |
|           55 |      834 | 2024-05-22 | NRG              | W   | 1.000      | 0.477        | 0.024 (0.011)    | 0.507 (0.242)    | 0 (0.000) |    16.35 | dare, dea, Peeping, shane, snav              |
|           54 |      877 | 2024-05-21 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.15 | dare, dea, Peeping, shane, snav              |
|           53 |      881 | 2024-05-21 | One More         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.41 | dare, dea, Peeping, shane, snav              |
|           52 |      916 | 2024-05-20 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -20.34 | dare, dea, Peeping, shane, snav              |
|           51 |     1009 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.991      | 0.477        | -                | 0.311 (0.147)    | 0 (0.000) |     7.68 | dare, dea, Peeping, shane, snav              |
|           50 |     1010 | 2024-05-17 | FLUFFY AIMERS    | W   | 0.991      | 0.477        | -                | 0.311 (0.147)    | -         |     8.21 | dare, dea, Peeping, shane, snav              |
|           49 |     1080 | 2024-05-15 | Limitless        | W   | 0.978      | -            | -                | -                | -         |     4.67 | dare, dea, Peeping, shane, snav              |
|           48 |     1087 | 2024-05-15 | Limitless        | W   | 0.978      | -            | -                | -                | -         |     4.89 | dare, dea, Peeping, shane, snav              |
|           47 |     1133 | 2024-05-14 | M80              | L   | 0.972      | -            | -                | -                | -         |    -4.65 | dare, dea, Peeping, shane, snav              |
|           46 |     1139 | 2024-05-14 | M80              | L   | 0.971      | -            | -                | -                | -         |    -4.86 | dare, dea, Peeping, shane, snav              |
|           45 |     1150 | 2024-05-14 | Take Flyte       | W   | 0.971      | 0.477        | -                | 0.306 (0.141)    | -         |     8.61 | dare, dea, Peeping, shane, snav              |
|           44 |     1154 | 2024-05-14 | Take Flyte       | W   | 0.970      | -            | -                | -                | -         |     9.24 | dare, dea, Peeping, shane, snav              |
|           43 |     1208 | 2024-05-12 | NRG              | L   | 0.957      | -            | -                | -                | -         |   -15.08 | dare, dea, intra, Peeping, snav              |
|           42 |     1228 | 2024-05-11 | Nouns            | W   | 0.951      | 0.270        | 0.081 (0.021)    | -                | -         |    17.19 | dare, dea, intra, Peeping, snav              |
|           41 |     1229 | 2024-05-11 | Wildcard         | W   | 0.951      | 0.270        | 0.068 (0.018)    | 0.572 (0.147)    | -         |    16.12 | dare, dea, intra, Peeping, snav              |
|           40 |     1232 | 2024-05-11 | Nouns            | L   | 0.950      | -            | -                | -                | -         |   -11.06 | dare, dea, intra, Peeping, snav              |
|           39 |     1299 | 2024-05-08 | MIGHT            | W   | 0.931      | -            | -                | -                | -         |     3.56 | dare, dea, Peeping, shane, snav              |
|           38 |     1301 | 2024-05-08 | MIGHT            | W   | 0.931      | -            | -                | -                | -         |     3.69 | dare, dea, Peeping, shane, snav              |
|           37 |     1323 | 2024-05-07 | Party Astronauts | W   | 0.925      | 0.477        | 0.055 (0.024)    | 0.600 (0.265)    | -         |    17.48 | dare, dea, Peeping, shane, snav              |
|           36 |     1324 | 2024-05-07 | Party Astronauts | L   | 0.925      | -            | -                | -                | -         |   -11.51 | dare, dea, Peeping, shane, snav              |
|           35 |     1620 | 2024-04-23 | Wildcard         | L   | 0.831      | -            | -                | -                | -         |   -11.68 | dare, dea, Peeping, shane, snav              |
|           34 |     1622 | 2024-04-23 | Wildcard         | W   | 0.831      | 0.477        | 0.068 (0.027)    | 0.572 (0.227)    | -         |    14.78 | dare, dea, Peeping, shane, snav              |
|           33 |     1757 | 2024-04-18 | Legacy           | L   | 0.799      | -            | -                | -                | -         |    -6.21 | dare, dea, Peeping, shane, snav              |
|           32 |     1765 | 2024-04-18 | M80              | L   | 0.797      | -            | -                | -                | -         |    -4.73 | dare, dea, Peeping, shane, snav              |
|           31 |     1809 | 2024-04-17 | Nouns            | W   | 0.791      | 0.143        | 0.081 (0.009)    | -                | -         |    15.77 | dare, dea, Peeping, shane, snav              |
|           30 |     1814 | 2024-04-17 | Wildcard         | W   | 0.790      | -            | -                | -                | -         |    15.26 | dare, dea, Peeping, shane, snav              |
|           29 |     1963 | 2024-04-10 | Nouns            | L   | 0.745      | -            | -                | -                | -         |    -8.43 | dare, dea, Peeping, shane, snav              |
|           28 |     1969 | 2024-04-10 | Nouns            | L   | 0.744      | -            | -                | -                | -         |    -8.97 | dare, dea, Peeping, shane, snav              |
|           27 |     2197 | 2024-04-03 | LAG              | W   | 0.698      | -            | -                | -                | -         |    10.92 | dare, dea, Peeping, shane, snav              |
|           26 |     2200 | 2024-04-03 | LAG              | L   | 0.698      | -            | -                | -                | -         |   -11.28 | dare, dea, Peeping, shane, snav              |
|           25 |     2373 | 2024-03-26 | BOSS             | W   | 0.645      | -            | -                | -                | -         |     8.01 | dare, dea, Peeping, shane, snav              |
|           24 |     2380 | 2024-03-26 | BOSS             | W   | 0.645      | -            | -                | -                | -         |     8.46 | dare, dea, Peeping, shane, snav              |
|           23 |     2547 | 2024-03-15 | Carpe Diem       | W   | 0.572      | -            | -                | -                | -         |     6.25 | dare, dea, Peeping, shane, snav              |
|           22 |     2549 | 2024-03-15 | Carpe Diem       | W   | 0.571      | -            | -                | -                | -         |     6.54 | dare, dea, Peeping, shane, snav              |
|           21 |     2647 | 2024-03-12 | Party Astronauts | L   | 0.551      | -            | -                | -                | -         |    -6.85 | dare, dea, Peeping, shane, snav              |
|           20 |     2747 | 2024-03-08 | Spirit           | L   | 0.522      | -            | -                | -                | -         |    -0.03 | dare, MRC9, Peeping, shane, snav             |
|           19 |     2898 | 2024-03-02 | ODDIK            | L   | 0.484      | -            | -                | -                | -         |    -6.17 | dare, nbgee12, Peeping, shane, snav          |
|           18 |     2928 | 2024-03-01 | Complexity       | L   | 0.476      | -            | -                | -                | -         |    -0.10 | dare, nbgee12, Peeping, shane, snav          |
|           17 |     3316 | 2024-02-13 | Mythic           | L   | 0.365      | -            | -                | -                | -         |    -6.68 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|           16 |     3318 | 2024-02-13 | Mythic           | W   | 0.365      | -            | -                | -                | -         |     4.91 | dare, dea, Peeping, shane, snav              |
|           15 |     3424 | 2024-02-04 | Wildcard         | W   | 0.305      | -            | -                | -                | -         |     5.92 | Infinite, JBa, SLIGHT, Sonic, stanislaw      |
|           14 |     3451 | 2024-02-03 | NRG              | W   | 0.297      | -            | -                | -                | -         |     4.53 | Brehze, daps, FaNg, HexT, oSee               |
|           13 |     3513 | 2024-02-01 | Nouns            | W   | 0.284      | -            | -                | -                | -         |     5.37 | dare, dea, Peeping, shane, snav              |
|           12 |     3516 | 2024-02-01 | BOSS             | W   | 0.284      | -            | -                | -                | -         |     3.97 | dare, dea, Peeping, shane, snav              |
|           11 |     3863 | 2024-01-18 | NRG              | L   | 0.191      | -            | -                | -                | -         |    -3.11 | dare, dea, Peeping, shane, snav              |
|           10 |     3913 | 2024-01-17 | regain           | W   | 0.184      | -            | -                | -                | -         |     0.56 | DYLAN, Joshyy, rayxts, sasha, Zucar          |
|            9 |     3955 | 2024-01-16 | Liquid           | L   | 0.178      | -            | -                | -                | -         |    -0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR       |
|            8 |     3960 | 2024-01-16 | NRG              | W   | 0.178      | -            | -                | -                | -         |     2.73 | dare, dea, Peeping, shane, snav              |
|            7 |     3965 | 2024-01-16 | Party Astronauts | W   | 0.177      | -            | -                | -                | -         |     3.54 | dare, dea, Peeping, shane, snav              |
|            6 |     4007 | 2024-01-15 | Mythic           | W   | 0.171      | -            | -                | -                | -         |     2.54 | Cooper, fl0m, freakazoid, hate, Trucklover86 |
|            5 |     4034 | 2024-01-14 | Party Astronauts | W   | 0.166      | -            | -                | -                | -         |     3.37 | dare, dea, Peeping, shane, snav              |
|            4 |     4043 | 2024-01-14 | For Fun          | W   | 0.164      | -            | -                | -                | -         |     1.32 | Momo, onter, Pluto, Tender, WOOHOO           |
|            3 |     4062 | 2024-01-13 | Liquid           | L   | 0.158      | -            | -                | -                | -         |    -0.06 | dare, dea, Peeping, shane, snav              |
|            2 |     4098 | 2024-01-12 | LOS              | W   | 0.153      | -            | -                | -                | -         |     0.31 | history, JOTA, leo_drk, short, t9rnay        |
|            1 |     4109 | 2024-01-12 | NRG              | L   | 0.152      | -            | -                | -                | -         |    -2.37 | Brehze, daps, FaNg, HexT, oSee               |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,433.33)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-09 |      1.000 | $4,250.00      | $4,250.00       |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
