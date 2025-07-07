### Roster Details<br />
Team Name: NRG<br />
Roster: br0, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [36](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [6]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  1138.9<br />
<br />
Final Rank Value (1138.9) = Starting Rank Value (1076.7) + Head To Head Adjustments (62.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.414[<sup>2</sup>](#table1)

The average of these factors is 0.363<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1076.7
- 400 + ( ( 0.363 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1076.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |      370 | 2025-06-06 | Lynn Vision        | L   | 0.993      | -            | -                | -                | -         |    -8.06 | br0, HexT, Jeorge, nitr0, oSee |
|           66 |      381 | 2025-06-05 | OG                 | L   | 0.987      | -            | -                | -                | -         |   -15.22 | br0, HexT, Jeorge, nitr0, oSee |
|           65 |      398 | 2025-06-04 | Complexity         | W   | 0.979      | 0.143        | 0.174 (0.024)    | -                | 1 (0.979) |    22.19 | br0, HexT, Jeorge, nitr0, oSee |
|           64 |      409 | 2025-06-03 | HEROIC             | L   | 0.974      | -            | -                | -                | -         |    -2.48 | br0, HexT, Jeorge, nitr0, oSee |
|           63 |      414 | 2025-06-03 | TYLOO              | W   | 0.973      | 0.143        | 0.219 (0.030)    | -                | 1 (0.973) |    25.12 | br0, HexT, Jeorge, nitr0, oSee |
|           62 |      583 | 2025-05-20 | Aurora             | L   | 0.881      | -            | -                | -                | -         |    -1.13 | br0, HexT, Jeorge, nitr0, oSee |
|           61 |      612 | 2025-05-19 | Falcons            | L   | 0.875      | -            | -                | -                | -         |    -0.54 | br0, HexT, Jeorge, nitr0, oSee |
|           60 |      667 | 2025-05-16 | Legacy             | L   | 0.855      | -            | -                | -                | -         |    -8.72 | br0, HexT, Jeorge, nitr0, oSee |
|           59 |      692 | 2025-05-15 | BOSS               | W   | 0.848      | 0.384        | 0.023 (0.007)    | 0.659 (0.215)    | 0 (0.000) |     6.85 | br0, HexT, Jeorge, nitr0, oSee |
|           58 |      713 | 2025-05-14 | Moneyball          | W   | 0.842      | -            | -                | -                | 0 (0.000) |     0.46 | br0, HexT, Jeorge, nitr0, oSee |
|           57 |      804 | 2025-05-11 | BLUEJAYS           | W   | 0.822      | 0.477        | 0.031 (0.012)    | 0.600 (0.235)    | 0 (0.000) |     6.25 | br0, HexT, Jeorge, nitr0, oSee |
|           56 |      879 | 2025-05-08 | BLUEJAYS           | W   | 0.802      | 0.477        | 0.031 (0.012)    | 0.600 (0.230)    | 0 (0.000) |     6.10 | br0, HexT, Jeorge, nitr0, oSee |
|           55 |      902 | 2025-05-07 | Getting Info       | W   | 0.796      | 0.477        | 0.019 (0.007)    | 0.543 (0.206)    | 0 (0.000) |     6.76 | br0, HexT, Jeorge, nitr0, oSee |
|           54 |      939 | 2025-05-06 | BOSS               | W   | 0.789      | 0.477        | 0.023 (0.009)    | 0.659 (0.248)    | -         |     6.64 | br0, HexT, Jeorge, nitr0, oSee |
|           53 |      994 | 2025-05-04 | BLUEJAYS           | W   | 0.775      | 0.303        | -                | 0.600 (0.141)    | -         |     6.11 | br0, HexT, Jeorge, nitr0, oSee |
|           52 |      995 | 2025-05-04 | BOSS               | W   | 0.775      | 0.303        | -                | 0.659 (0.155)    | -         |     7.06 | br0, HexT, Jeorge, nitr0, oSee |
|           51 |     1020 | 2025-05-03 | Marsborne          | W   | 0.767      | -            | -                | -                | -         |     5.37 | br0, HexT, Jeorge, nitr0, oSee |
|           50 |     1027 | 2025-05-03 | 1WIN NA            | W   | 0.767      | -            | -                | -                | -         |     0.54 | br0, HexT, Jeorge, nitr0, oSee |
|           49 |     1159 | 2025-04-27 | Ninjas in Pyjamas  | L   | 0.728      | -            | -                | -                | -         |    -4.13 | br0, HexT, Jeorge, nitr0, oSee |
|           48 |     1184 | 2025-04-27 | LFO 4              | W   | 0.724      | -            | -                | -                | 1 (0.724) |     4.57 | br0, HexT, Jeorge, nitr0, oSee |
|           47 |     1190 | 2025-04-26 | FlyQuest RED       | W   | 0.723      | 0.333        | 0.031 (0.007)    | -                | 1 (0.723) |     3.09 | br0, HexT, Jeorge, nitr0, oSee |
|           46 |     1342 | 2025-04-17 | BOSS               | W   | 0.662      | -            | -                | -                | -         |     6.61 | br0, HexT, Jeorge, nitr0, oSee |
|           45 |     1344 | 2025-04-17 | Getting Info       | W   | 0.661      | -            | -                | -                | -         |     7.55 | br0, HexT, Jeorge, nitr0, oSee |
|           44 |     1377 | 2025-04-16 | Wildcard           | L   | 0.655      | -            | -                | -                | -         |   -12.01 | br0, HexT, Jeorge, nitr0, oSee |
|           43 |     1402 | 2025-04-15 | BLUEJAYS           | W   | 0.649      | -            | -                | -                | -         |     5.43 | br0, HexT, Jeorge, nitr0, oSee |
|           42 |     1602 | 2025-04-08 | Legacy             | W   | 0.598      | 0.477        | 0.124 (0.035)    | 0.954 (0.272)    | -         |    15.66 | br0, HexT, Jeorge, nitr0, oSee |
|           41 |     1603 | 2025-04-08 | Legacy             | W   | 0.598      | 0.477        | 0.124 (0.035)    | 0.954 (0.272)    | -         |    16.11 | br0, HexT, Jeorge, nitr0, oSee |
|           40 |     1678 | 2025-04-03 | Akimbo             | W   | 0.569      | -            | -                | -                | -         |     2.25 | br0, HexT, Jeorge, nitr0, oSee |
|           39 |     1680 | 2025-04-03 | Akimbo             | W   | 0.569      | -            | -                | -                | -         |     2.30 | br0, HexT, Jeorge, nitr0, oSee |
|           38 |     1723 | 2025-04-02 | Worms              | W   | 0.562      | -            | -                | -                | -         |     1.28 | br0, HexT, Jeorge, nitr0, oSee |
|           37 |     1733 | 2025-04-02 | Worms              | W   | 0.562      | -            | -                | -                | -         |     1.30 | br0, HexT, Jeorge, nitr0, oSee |
|           36 |     1791 | 2025-04-01 | Chicken Coop       | W   | 0.556      | -            | -                | -                | -         |     2.30 | br0, HexT, Jeorge, nitr0, oSee |
|           35 |     1795 | 2025-04-01 | Chicken Coop       | L   | 0.555      | -            | -                | -                | -         |   -15.42 | br0, HexT, Jeorge, nitr0, oSee |
|           34 |     1830 | 2025-03-31 | BOSS               | L   | 0.549      | -            | -                | -                | -         |   -10.57 | br0, HexT, Jeorge, nitr0, oSee |
|           33 |     1842 | 2025-03-30 | BLUEJAYS           | W   | 0.543      | -            | -                | -                | -         |     4.48 | br0, HexT, Jeorge, nitr0, oSee |
|           32 |     1880 | 2025-03-29 | BLUEJAYS           | W   | 0.536      | -            | -                | -                | -         |     4.45 | br0, HexT, Jeorge, nitr0, oSee |
|           31 |     1949 | 2025-03-28 | Tsunami            | W   | 0.529      | -            | -                | -                | -         |     1.71 | br0, HexT, Jeorge, nitr0, oSee |
|           30 |     2025 | 2025-03-27 | Party Astronauts   | W   | 0.522      | -            | -                | -                | -         |     3.37 | br0, HexT, Jeorge, nitr0, oSee |
|           29 |     2082 | 2025-03-26 | Marsborne          | L   | 0.516      | -            | -                | -                | -         |   -12.87 | br0, HexT, Jeorge, nitr0, oSee |
|           28 |     2087 | 2025-03-26 | Marsborne          | L   | 0.516      | -            | -                | -                | -         |   -13.24 | br0, HexT, Jeorge, nitr0, oSee |
|           27 |     2135 | 2025-03-25 | InControl          | W   | 0.509      | -            | -                | -                | -         |     0.66 | br0, HexT, Jeorge, nitr0, oSee |
|           26 |     2137 | 2025-03-25 | InControl          | W   | 0.509      | -            | -                | -                | -         |     0.66 | br0, HexT, Jeorge, nitr0, oSee |
|           25 |     2167 | 2025-03-24 | Bad News Capybaras | W   | 0.503      | -            | -                | -                | -         |     1.68 | br0, HexT, Jeorge, nitr0, oSee |
|           24 |     2168 | 2025-03-24 | Bad News Capybaras | W   | 0.503      | -            | -                | -                | -         |     1.71 | br0, HexT, Jeorge, nitr0, oSee |
|           23 |     2275 | 2025-03-19 | Party Astronauts   | L   | 0.469      | -            | -                | -                | -         |   -12.13 | br0, HexT, Jeorge, nitr0, oSee |
|           22 |     2284 | 2025-03-19 | Party Astronauts   | L   | 0.469      | -            | -                | -                | -         |   -12.41 | br0, HexT, Jeorge, nitr0, oSee |
|           21 |     2329 | 2025-03-18 | BLUEJAYS           | W   | 0.463      | 0.477        | -                | 0.600 (0.132)    | -         |     2.83 | br0, HexT, Jeorge, nitr0, oSee |
|           20 |     2336 | 2025-03-18 | BLUEJAYS           | W   | 0.462      | -            | -                | -                | -         |     2.91 | br0, HexT, Jeorge, nitr0, oSee |
|           19 |     2832 | 2025-03-04 | FURIA              | L   | 0.368      | -            | -                | -                | -         |    -0.48 | br0, HexT, Jeorge, nitr0, oSee |
|           18 |     2860 | 2025-03-03 | Aurora             | L   | 0.360      | -            | -                | -                | -         |    -0.23 | br0, HexT, Jeorge, nitr0, oSee |
|           17 |     2885 | 2025-03-02 | Nemiga             | W   | 0.353      | -            | -                | -                | 1 (0.353) |     7.62 | br0, HexT, Jeorge, nitr0, oSee |
|           16 |     2909 | 2025-03-01 | GamerLegion        | L   | 0.347      | -            | -                | -                | -         |    -0.70 | br0, HexT, Jeorge, nitr0, oSee |
|           15 |     3345 | 2025-02-14 | M80                | L   | 0.247      | -            | -                | -                | -         |    -5.47 | br0, HexT, Jeorge, nitr0, oSee |
|           14 |     3369 | 2025-02-13 | JERSA              | W   | 0.240      | -            | -                | -                | -         |     0.75 | br0, HexT, Jeorge, nitr0, oSee |
|           13 |     3382 | 2025-02-12 | BLUEJAYS           | W   | 0.236      | -            | -                | -                | -         |     1.54 | br0, HexT, Jeorge, nitr0, oSee |
|           12 |     3403 | 2025-02-11 | BOSS               | W   | 0.229      | -            | -                | -                | -         |     2.40 | br0, HexT, Jeorge, nitr0, oSee |
|           11 |     3407 | 2025-02-11 | Marsborne          | W   | 0.228      | -            | -                | -                | -         |     1.45 | br0, HexT, Jeorge, nitr0, oSee |
|           10 |     3734 | 2025-01-28 | LAG                | W   | 0.136      | -            | -                | -                | -         |     0.65 | br0, HexT, Jeorge, nitr0, oSee |
|            9 |     3738 | 2025-01-28 | LAG                | L   | 0.136      | -            | -                | -                | -         |    -3.65 | br0, HexT, Jeorge, nitr0, oSee |
|            8 |     3770 | 2025-01-27 | BOSS               | W   | 0.129      | -            | -                | -                | -         |     1.33 | br0, HexT, Jeorge, nitr0, oSee |
|            7 |     3775 | 2025-01-27 | BOSS               | L   | 0.129      | -            | -                | -                | -         |    -2.76 | br0, HexT, Jeorge, nitr0, oSee |
|            6 |     3810 | 2025-01-24 | Getting Info       | L   | 0.109      | -            | -                | -                | -         |    -2.60 | br0, HexT, Jeorge, nitr0, oSee |
|            5 |     3815 | 2025-01-24 | Getting Info       | L   | 0.109      | -            | -                | -                | -         |    -2.61 | br0, HexT, Jeorge, nitr0, oSee |
|            4 |     3852 | 2025-01-23 | LFO 4              | W   | 0.103      | -            | -                | -                | -         |     0.51 | br0, HexT, Jeorge, nitr0, oSee |
|            3 |     3857 | 2025-01-23 | LFO 4              | W   | 0.102      | -            | -                | -                | -         |     0.51 | br0, HexT, Jeorge, nitr0, oSee |
|            2 |     3921 | 2025-01-21 | Aether             | W   | 0.089      | -            | -                | -                | -         |     0.27 | br0, HexT, Jeorge, nitr0, oSee |
|            1 |     3926 | 2025-01-21 | Aether             | W   | 0.089      | -            | -                | -                | -         |     0.27 | br0, HexT, Jeorge, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,010.53)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.915 | $4,000.00      | $3,658.28       |
| 2025-05-16 |      0.855 | $5,000.00      | $4,277.38       |
| 2025-05-11 |      0.822 | $25,000.00     | $20,559.03      |
| 2025-05-04 |      0.775 | $4,000.00      | $3,101.60       |
| 2025-04-27 |      0.729 | $1,000.00      | $729.09         |
| 2025-03-05 |      0.374 | $4,500.00      | $1,685.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
