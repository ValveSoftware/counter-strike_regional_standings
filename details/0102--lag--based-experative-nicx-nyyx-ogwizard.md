### Roster Details<br />
Team Name: LAG<br />
Roster: based, Experative, nicx, Nyyx, ogwizard<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [24]( ../standings_americas.md)<br />
Final Rank Value:  864.6<br />
<br />
Final Rank Value (864.6) = Starting Rank Value (901.7) + Head To Head Adjustments (-37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 901.7
- 400 + ( ( 0.238 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 901.7


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
|           43 |      248 | 2024-06-13 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -14.97 | based, Experative, nicx, Nyyx, ogwizard |
|           42 |      420 | 2024-06-08 | Strife           | W   | 0.982      | 0.371        | 0.013 (0.005)    | -                | 0 (0.000) |     9.59 | based, Experative, nicx, Nyyx, ogwizard |
|           41 |      476 | 2024-06-07 | Wildcard         | L   | 0.976      | -            | -                | -                | -         |    -9.51 | based, Experative, nicx, Nyyx, ogwizard |
|           40 |      560 | 2024-06-06 | Vibe             | W   | 0.967      | -            | -                | -                | 0 (0.000) |     2.16 | based, Experative, nicx, Nyyx, ogwizard |
|           39 |      601 | 2024-06-05 | NRG              | L   | 0.963      | -            | -                | -                | -         |   -11.79 | based, Experative, nicx, Nyyx, ogwizard |
|           38 |      610 | 2024-06-05 | Carpe Diem       | W   | 0.961      | 0.384        | 0.008 (0.003)    | 0.245 (0.090)    | 0 (0.000) |    11.85 | based, Experative, nicx, Nyyx, ogwizard |
|           37 |      653 | 2024-06-04 | Carpe Diem       | W   | 0.956      | 0.477        | 0.008 (0.003)    | 0.245 (0.112)    | 0 (0.000) |    12.80 | based, Experative, nicx, Nyyx, ogwizard |
|           36 |      662 | 2024-06-04 | Retirement Home  | W   | 0.955      | -            | -                | -                | 0 (0.000) |     2.08 | based, Experative, nicx, Nyyx, ogwizard |
|           35 |      967 | 2024-05-22 | Limitless        | W   | 0.869      | 0.477        | -                | 0.225 (0.093)    | 0 (0.000) |     6.33 | based, Experative, nicx, Nyyx, ogwizard |
|           34 |      970 | 2024-05-22 | Limitless        | W   | 0.869      | 0.477        | -                | 0.225 (0.093)    | 0 (0.000) |     6.69 | based, Experative, nicx, Nyyx, ogwizard |
|           33 |      973 | 2024-05-22 | Wildcard         | L   | 0.868      | -            | -                | -                | -         |    -8.25 | based, Experative, nicx, Nyyx, ogwizard |
|           32 |     1217 | 2024-05-15 | NRG              | L   | 0.822      | -            | -                | -                | -         |    -8.61 | based, Experative, nicx, Nyyx, ogwizard |
|           31 |     1225 | 2024-05-15 | NRG              | L   | 0.822      | -            | -                | -                | -         |    -9.19 | based, Experative, nicx, Nyyx, ogwizard |
|           30 |     1271 | 2024-05-14 | Carpe Diem       | W   | 0.816      | 0.477        | 0.008 (0.003)    | 0.245 (0.095)    | -         |     9.71 | based, Experative, nicx, Nyyx, ogwizard |
|           29 |     1278 | 2024-05-14 | Carpe Diem       | L   | 0.815      | -            | -                | -                | -         |   -16.37 | based, Experative, nicx, Nyyx, ogwizard |
|           28 |     1413 | 2024-05-09 | M80              | L   | 0.782      | -            | -                | -                | -         |    -2.77 | based, Experative, nicx, Nyyx, ogwizard |
|           27 |     1418 | 2024-05-09 | M80              | L   | 0.782      | -            | -                | -                | -         |    -2.85 | based, Experative, nicx, Nyyx, ogwizard |
|           26 |     1432 | 2024-05-08 | Party Astronauts | L   | 0.776      | -            | -                | -                | -         |    -8.13 | based, Experative, nicx, Nyyx, ogwizard |
|           25 |     1437 | 2024-05-08 | Party Astronauts | L   | 0.775      | -            | -                | -                | -         |    -8.64 | based, Experative, nicx, Nyyx, ogwizard |
|           24 |     2099 | 2024-04-10 | Mythic           | W   | 0.589      | 0.477        | 0.014 (0.004)    | 0.359 (0.101)    | -         |     8.18 | based, Experative, nicx, Nyyx, ogwizard |
|           23 |     2104 | 2024-04-10 | Mythic           | W   | 0.589      | 0.477        | 0.014 (0.004)    | 0.359 (0.101)    | -         |     8.61 | based, Experative, nicx, Nyyx, ogwizard |
|           22 |     2154 | 2024-04-09 | BOSS             | L   | 0.582      | -            | -                | -                | -         |   -10.36 | based, Experative, nicx, Nyyx, ogwizard |
|           21 |     2157 | 2024-04-09 | BOSS             | L   | 0.582      | -            | -                | -                | -         |   -10.89 | based, Experative, nicx, Nyyx, ogwizard |
|           20 |     2285 | 2024-04-04 | Nouns            | W   | 0.549      | 0.477        | 0.086 (0.022)    | 0.484 (0.127)    | -         |    11.15 | based, Experative, nicx, Nyyx, ogwizard |
|           19 |     2290 | 2024-04-04 | Nouns            | L   | 0.549      | -            | -                | -                | -         |    -6.20 | based, Experative, nicx, Nyyx, ogwizard |
|           18 |     2331 | 2024-04-03 | Elevate          | L   | 0.542      | -            | -                | -                | -         |    -5.13 | based, Experative, nicx, Nyyx, ogwizard |
|           17 |     2334 | 2024-04-03 | Elevate          | W   | 0.542      | 0.477        | 0.041 (0.011)    | 0.596 (0.154)    | -         |    12.25 | based, Experative, nicx, Nyyx, ogwizard |
|           16 |     2508 | 2024-03-26 | Wildcard         | L   | 0.489      | -            | -                | -                | -         |    -6.35 | based, Experative, nicx, Nyyx, ogwizard |
|           15 |     2512 | 2024-03-26 | Wildcard         | W   | 0.489      | 0.477        | 0.073 (0.017)    | 0.569 (0.133)    | -         |     9.29 | based, Experative, nicx, Nyyx, ogwizard |
|           14 |     2594 | 2024-03-20 | Take Flyte       | L   | 0.449      | -            | -                | -                | -         |    -9.53 | based, Experative, nicx, Nyyx, ogwizard |
|           13 |     2596 | 2024-03-20 | Take Flyte       | W   | 0.449      | -            | -                | -                | -         |     4.66 | based, Experative, nicx, Nyyx, ogwizard |
|           12 |     2637 | 2024-03-17 | OMiT             | W   | 0.430      | 0.333        | 0.024 (0.003)    | -                | 1 (0.430) |     5.27 | based, Experative, nicx, Nyyx, ogwizard |
|           11 |     2639 | 2024-03-17 | Akimbo           | W   | 0.429      | -            | -                | -                | 1 (0.429) |     3.56 | based, Experative, nicx, Nyyx, ogwizard |
|           10 |     2649 | 2024-03-17 | WICKED           | W   | 0.427      | -            | -                | -                | 1 (0.427) |     2.26 | based, Experative, nicx, Nyyx, ogwizard |
|            9 |     2886 | 2024-03-07 | FLUFFY AIMERS    | W   | 0.363      | -            | -                | -                | -         |     5.01 | based, Experative, nicx, Nyyx, ogwizard |
|            8 |     2887 | 2024-03-07 | FLUFFY AIMERS    | L   | 0.363      | -            | -                | -                | -         |    -6.55 | based, Experative, nicx, Nyyx, ogwizard |
|            7 |     2915 | 2024-03-06 | MIGHT            | W   | 0.356      | -            | -                | -                | -         |     1.74 | based, Experative, nicx, Nyyx, ogwizard |
|            6 |     2916 | 2024-03-06 | MIGHT            | L   | 0.356      | -            | -                | -                | -         |    -9.59 | based, Experative, nicx, Nyyx, ogwizard |
|            5 |     2952 | 2024-03-05 | One More         | W   | 0.349      | -            | -                | -                | -         |     3.14 | based, Experative, nicx, Nyyx, ogwizard |
|            4 |     2954 | 2024-03-05 | One More         | W   | 0.349      | -            | -                | -                | -         |     3.22 | based, Experative, nicx, Nyyx, ogwizard |
|            3 |     3166 | 2024-02-24 | Limitless        | L   | 0.282      | -            | -                | -                | -         |    -6.76 | based, Experative, nicx, Nyyx, ogwizard |
|            2 |     3355 | 2024-02-16 | FLUFFY AIMERS    | L   | 0.228      | -            | -                | -                | -         |    -4.27 | based, Experative, nicx, Nyyx, ogwizard |
|            1 |     4170 | 2024-01-14 | Bad News Bears   | W   | 0.010      | -            | -                | -                | -         |     0.02 | based, Experative, Nyyx, ogwizard, X-23 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,332.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.989 | $3,000.00      | $2,967.37       |
| 2024-03-17 |      0.430 | $5,500.00      | $2,364.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
