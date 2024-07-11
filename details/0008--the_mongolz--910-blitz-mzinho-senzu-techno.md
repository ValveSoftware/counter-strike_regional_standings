### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [1]( ../standings_asia.md)<br />
Final Rank Value:  1802.3<br />
<br />
Final Rank Value (1802.3) = Starting Rank Value (1987.1) + Head To Head Adjustments (-184.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.622[<sup>2</sup>](#table1)
- Opponent Network: 0.388[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.752<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1987.1
- 400 + ( ( 0.752 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1987.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |        4 | 2024-07-11 | CatEvil           | L   | 1.000      | -            | -                | -                | -         |   -31.46 | 910, bLitz, mzinho, Senzu, Techno |
|           53 |        8 | 2024-07-11 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -31.44 | 910, bLitz, mzinho, Senzu, Techno |
|           52 |       11 | 2024-07-11 | Steel Helmet      | W   | 1.000      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           51 |      192 | 2024-06-15 | Falcons           | L   | 1.000      | -            | -                | -                | -         |   -26.98 | 910, bLitz, mzinho, Senzu, Techno |
|           50 |      235 | 2024-06-14 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -29.72 | 910, bLitz, mzinho, Senzu, Techno |
|           49 |      246 | 2024-06-14 | Party Astronauts  | W   | 1.000      | 0.500        | -                | 0.589 (0.294)    | 1 (1.000) |     0.23 | 910, bLitz, mzinho, Senzu, Techno |
|           48 |      377 | 2024-06-09 | Ninjas in Pyjamas | W   | 0.987      | 0.715        | 0.340 (0.240)    | 0.512 (0.361)    | 1 (0.987) |     6.68 | 910, bLitz, mzinho, Senzu, Techno |
|           47 |      455 | 2024-06-08 | Astralis          | W   | 0.979      | 0.715        | 0.546 (0.383)    | 0.461 (0.323)    | 1 (0.979) |    13.67 | 910, bLitz, mzinho, Senzu, Techno |
|           46 |      567 | 2024-06-06 | Astralis          | L   | 0.967      | -            | -                | -                | -         |   -17.33 | 910, bLitz, mzinho, Senzu, Techno |
|           45 |      581 | 2024-06-06 | Ninjas in Pyjamas | W   | 0.966      | 0.715        | 0.340 (0.235)    | 0.512 (0.353)    | 1 (0.966) |     6.21 | 910, bLitz, mzinho, Senzu, Techno |
|           44 |      599 | 2024-06-06 | HEROIC            | W   | 0.964      | 0.715        | 0.338 (0.233)    | 0.480 (0.331)    | 1 (0.964) |     7.27 | 910, bLitz, mzinho, Senzu, Techno |
|           43 |      634 | 2024-06-05 | ENCE              | W   | 0.959      | 0.715        | 0.216 (0.148)    | -                | 1 (0.959) |     1.31 | 910, bLitz, mzinho, Senzu, Techno |
|           42 |      646 | 2024-06-05 | Sashi             | W   | 0.958      | 0.715        | -                | 1.000 (0.685)    | 1 (0.958) |     0.75 | 910, bLitz, mzinho, Senzu, Techno |
|           41 |      727 | 2024-06-02 | BLEED             | W   | 0.939      | 0.500        | 0.348 (0.163)    | 0.908 (0.426)    | 1 (0.939) |     1.02 | 910, bLitz, mzinho, Senzu, Techno |
|           40 |      766 | 2024-06-01 | BLEED             | W   | 0.931      | 0.500        | 0.348 (0.162)    | 0.908 (0.423)    | 1 (0.931) |     0.90 | 910, bLitz, mzinho, Senzu, Techno |
|           39 |      845 | 2024-05-29 | Aurora            | W   | 0.912      | 0.500        | 0.518 (0.236)    | 0.853 (0.389)    | 1 (0.912) |     3.41 | 910, bLitz, mzinho, Senzu, Techno |
|           38 |      866 | 2024-05-28 | Gaimin Gladiators | W   | 0.905      | -            | -                | -                | -         |     0.38 | 910, bLitz, mzinho, Senzu, Techno |
|           37 |     1139 | 2024-05-18 | ATOX              | W   | 0.838      | -            | -                | -                | -         |     0.13 | 910, bLitz, mzinho, Senzu, Techno |
|           36 |     1175 | 2024-05-17 | Chinggis Warriors | W   | 0.831      | -            | -                | -                | -         |     0.04 | 910, bLitz, mzinho, Senzu, Techno |
|           35 |     1443 | 2024-05-08 | Virtus.pro        | L   | 0.774      | -            | -                | -                | -         |   -17.60 | 910, bLitz, mzinho, Senzu, Techno |
|           34 |     1654 | 2024-04-28 | Vitality          | L   | 0.705      | -            | -                | -                | -         |    -9.82 | 910, bLitz, mzinho, Senzu, Techno |
|           33 |     1731 | 2024-04-25 | G2                | W   | 0.685      | 0.889        | 0.745 (0.454)    | 0.481 (0.293)    | -         |    10.23 | 910, bLitz, mzinho, Senzu, Techno |
|           32 |     1749 | 2024-04-24 | Falcons           | W   | 0.679      | 0.889        | 0.352 (0.212)    | -                | -         |     2.82 | 910, bLitz, mzinho, Senzu, Techno |
|           31 |     1874 | 2024-04-19 | Rare Atom         | W   | 0.646      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           30 |     1924 | 2024-04-18 | TYLOO             | W   | 0.639      | -            | -                | -                | -         |     0.05 | 910, bLitz, mzinho, Senzu, Techno |
|           29 |     1934 | 2024-04-18 | Rare Atom         | W   | 0.638      | -            | -                | -                | -         |     0.02 | 910, bLitz, mzinho, Senzu, Techno |
|           28 |     2361 | 2024-04-03 | Lynn Vision       | W   | 0.539      | -            | -                | -                | -         |     0.24 | 910, bLitz, mzinho, Senzu, Techno |
|           27 |     2375 | 2024-04-03 | LYG               | W   | 0.538      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|           26 |     2403 | 2024-04-02 | ATOX              | W   | 0.532      | -            | -                | -                | -         |     0.07 | 910, bLitz, mzinho, Senzu, Techno |
|           25 |     2407 | 2024-04-02 | LYG               | L   | 0.531      | -            | -                | -                | -         |   -16.72 | 910, bLitz, mzinho, Senzu, Techno |
|           24 |     2555 | 2024-03-22 | paiN              | L   | 0.460      | -            | -                | -                | -         |   -12.79 | 910, bLitz, mzinho, Senzu, Techno |
|           23 |     2577 | 2024-03-21 | Vitality          | L   | 0.453      | -            | -                | -                | -         |    -6.95 | 910, bLitz, mzinho, Senzu, Techno |
|           22 |     2588 | 2024-03-21 | Natus Vincere     | L   | 0.452      | -            | -                | -                | -         |    -8.13 | 910, bLitz, mzinho, Senzu, Techno |
|           21 |     2607 | 2024-03-20 | Legacy            | W   | 0.445      | -            | -                | -                | -         |     0.12 | 910, bLitz, mzinho, Senzu, Techno |
|           20 |     2624 | 2024-03-19 | Lynn Vision       | W   | 0.439      | -            | -                | -                | -         |     0.15 | 910, bLitz, mzinho, Senzu, Techno |
|           19 |     2630 | 2024-03-18 | AMKAL             | W   | 0.433      | -            | -                | -                | -         |     0.12 | 910, bLitz, mzinho, Senzu, Techno |
|           18 |     2653 | 2024-03-17 | Gaimin Gladiators | L   | 0.427      | -            | -                | -                | -         |   -13.31 | 910, bLitz, mzinho, Senzu, Techno |
|           17 |     2665 | 2024-03-17 | Eternal Fire      | L   | 0.425      | -            | -                | -                | -         |   -10.56 | 910, bLitz, mzinho, Senzu, Techno |
|           16 |     3098 | 2024-02-27 | Lynn Vision       | W   | 0.303      | -            | -                | -                | -         |     0.09 | 910, bLitz, mzinho, Senzu, Techno |
|           15 |     3134 | 2024-02-25 | FlyQuest          | W   | 0.290      | -            | -                | -                | -         |     0.25 | 910, bLitz, mzinho, Senzu, Techno |
|           14 |     3140 | 2024-02-25 | MAG               | W   | 0.289      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|           13 |     3624 | 2024-02-02 | ENCE              | L   | 0.133      | -            | -                | -                | -         |    -3.95 | 910, bLitz, mzinho, Senzu, Techno |
|           12 |     3664 | 2024-02-01 | Spirit            | L   | 0.126      | -            | -                | -                | -         |    -1.91 | 910, bLitz, mzinho, Senzu, Techno |
|           11 |     3675 | 2024-01-31 | FURIA             | W   | 0.120      | -            | -                | -                | -         |     0.55 | 910, bLitz, mzinho, Senzu, Techno |
|           10 |     3722 | 2024-01-28 | Lynn Vision       | W   | 0.099      | -            | -                | -                | -         |     0.03 | 910, bLitz, mzinho, Senzu, Techno |
|            9 |     3724 | 2024-01-28 | NKT               | W   | 0.098      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            8 |     3734 | 2024-01-27 | TYLOO             | L   | 0.092      | -            | -                | -                | -         |    -2.91 | 910, bLitz, mzinho, Senzu, Techno |
|            7 |     3752 | 2024-01-26 | TYLOO             | W   | 0.086      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            6 |     3759 | 2024-01-26 | The Huns          | W   | 0.085      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            5 |     3763 | 2024-01-26 | TYLOO             | W   | 0.084      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            4 |     3764 | 2024-01-25 | ACME              | W   | 0.083      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            3 |     3874 | 2024-01-21 | ATOX              | W   | 0.051      | -            | -                | -                | -         |     0.01 | 910, bLitz, mzinho, Senzu, Techno |
|            2 |     3965 | 2024-01-19 | MungYu            | W   | 0.038      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |
|            1 |     3973 | 2024-01-19 | NKT               | W   | 0.038      | -            | -                | -                | -         |     0.00 | 910, bLitz, mzinho, Senzu, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($279,544.50)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-09 |      0.987 | $200,000.00    | $197,316.44     |
| 2024-06-02 |      0.939 | $50,000.00     | $46,950.77      |
| 2024-05-12 |      0.800 | $23,500.00     | $18,796.60      |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-02-02 |      0.134 | $4,500.00      | $605.19         |
| 2024-01-28 |      0.099 | $25,000.00     | $2,462.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
