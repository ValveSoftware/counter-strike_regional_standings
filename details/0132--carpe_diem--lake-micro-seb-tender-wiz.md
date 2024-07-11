### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [132](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  782.6<br />
<br />
Final Rank Value (782.6) = Starting Rank Value (799.5) + Head To Head Adjustments (-16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.5
- 400 + ( ( 0.189 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 799.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      255 | 2024-06-13 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -15.41 | Lake, micro, Seb, Tender, wiz |
|           41 |      610 | 2024-06-05 | LAG              | L   | 0.961      | -            | -                | -                | -         |   -11.85 | Lake, micro, Seb, Tender, wiz |
|           40 |      653 | 2024-06-04 | LAG              | L   | 0.956      | -            | -                | -                | -         |   -12.80 | Lake, micro, Seb, Tender, wiz |
|           39 |      964 | 2024-05-22 | MIGHT            | W   | 0.869      | 0.477        | -                | 0.089 (0.037)    | 0 (0.000) |     4.92 | Lake, micro, Seb, Tender, wiz |
|           38 |      971 | 2024-05-22 | MIGHT            | W   | 0.869      | -            | -                | -                | 0 (0.000) |     5.16 | Lake, micro, Seb, Tender, wiz |
|           37 |     1017 | 2024-05-21 | Legacy           | L   | 0.862      | -            | -                | -                | -         |    -4.74 | Lake, micro, Seb, Tender, wiz |
|           36 |     1021 | 2024-05-21 | Wildcard         | L   | 0.861      | -            | -                | -                | -         |    -7.41 | Lake, micro, Seb, Tender, wiz |
|           35 |     1027 | 2024-05-21 | Wildcard         | L   | 0.861      | -            | -                | -                | -         |    -7.88 | Lake, micro, Seb, Tender, wiz |
|           34 |     1051 | 2024-05-20 | BOSS             | W   | 0.855      | 0.477        | 0.021 (0.009)    | 0.349 (0.142)    | 0 (0.000) |    13.67 | Lake, micro, Seb, Tender, wiz |
|           33 |     1055 | 2024-05-20 | BOSS             | L   | 0.855      | -            | -                | -                | -         |   -13.41 | Lake, micro, Seb, Tender, wiz |
|           32 |     1177 | 2024-05-16 | One More         | W   | 0.829      | 0.477        | 0.003 (0.001)    | 0.219 (0.087)    | 0 (0.000) |     8.92 | Lake, micro, Seb, Tender, wiz |
|           31 |     1178 | 2024-05-16 | One More         | W   | 0.829      | 0.477        | 0.003 (0.001)    | 0.219 (0.087)    | 0 (0.000) |     9.54 | Lake, micro, Seb, Tender, wiz |
|           30 |     1215 | 2024-05-15 | Nouns            | W   | 0.822      | 0.477        | 0.086 (0.034)    | 0.484 (0.190)    | 0 (0.000) |    18.97 | Lake, micro, Seb, Tender, wiz |
|           29 |     1220 | 2024-05-15 | Nouns            | W   | 0.822      | 0.477        | 0.086 (0.034)    | 0.484 (0.190)    | 0 (0.000) |    20.03 | Lake, micro, Seb, Tender, wiz |
|           28 |     1271 | 2024-05-14 | LAG              | L   | 0.816      | -            | -                | -                | -         |    -9.71 | Lake, micro, Seb, Tender, wiz |
|           27 |     1278 | 2024-05-14 | LAG              | W   | 0.815      | 0.477        | 0.021 (0.008)    | 0.396 (0.154)    | 0 (0.000) |    16.37 | Lake, micro, Seb, Tender, wiz |
|           26 |     2065 | 2024-04-11 | Mythic           | W   | 0.596      | 0.477        | 0.014 (0.004)    | 0.359 (0.102)    | 0 (0.000) |    11.80 | arcade, Lake, micro, Seb, wiz |
|           25 |     2068 | 2024-04-11 | Mythic           | L   | 0.595      | -            | -                | -                | -         |    -7.04 | arcade, Lake, micro, Seb, wiz |
|           24 |     2155 | 2024-04-09 | NRG              | L   | 0.582      | -            | -                | -                | -         |    -5.72 | arcade, Lake, micro, Seb, wiz |
|           23 |     2158 | 2024-04-09 | NRG              | L   | 0.582      | -            | -                | -                | -         |    -5.98 | arcade, Lake, micro, Seb, wiz |
|           22 |     2282 | 2024-04-04 | Take Flyte       | L   | 0.549      | -            | -                | -                | -         |    -8.43 | arcade, Lake, micro, Seb, wiz |
|           21 |     2288 | 2024-04-04 | Take Flyte       | L   | 0.549      | -            | -                | -                | -         |    -8.85 | arcade, Lake, micro, Seb, wiz |
|           20 |     2461 | 2024-03-27 | Party Astronauts | L   | 0.496      | -            | -                | -                | -         |    -3.68 | arcade, Lake, micro, Seb, wiz |
|           19 |     2465 | 2024-03-27 | Party Astronauts | L   | 0.496      | -            | -                | -                | -         |    -3.80 | arcade, Lake, micro, Seb, wiz |
|           18 |     2680 | 2024-03-15 | Elevate          | L   | 0.416      | -            | -                | -                | -         |    -2.49 | arcade, Lake, micro, Seb, wiz |
|           17 |     2682 | 2024-03-15 | Elevate          | L   | 0.416      | -            | -                | -                | -         |    -2.54 | arcade, Lake, micro, Seb, wiz |
|           16 |     2742 | 2024-03-13 | Party Astronauts | L   | 0.401      | -            | -                | -                | -         |    -3.21 | arcade, Lake, micro, Seb, wiz |
|           15 |     2779 | 2024-03-12 | NRG              | W   | 0.395      | 0.143        | 0.026 (0.001)    | -                | 0 (0.000) |     7.79 | arcade, Lake, micro, Seb, wiz |
|           14 |     2914 | 2024-03-06 | Limitless        | W   | 0.356      | 0.477        | 0.002 (0.000)    | 0.225 (0.038)    | -         |     3.94 | arcade, Lake, micro, Seb, wiz |
|           13 |     2917 | 2024-03-06 | Limitless        | W   | 0.356      | 0.477        | -                | 0.225 (0.038)    | -         |     4.05 | arcade, Lake, micro, Seb, wiz |
|           12 |     3409 | 2024-02-14 | Rocket           | W   | 0.216      | -            | -                | -                | -         |     1.21 | arcade, Lake, micro, Seb, wiz |
|           11 |     3411 | 2024-02-14 | Rocket           | L   | 0.216      | -            | -                | -                | -         |    -5.64 | arcade, Lake, micro, Seb, wiz |
|           10 |     3448 | 2024-02-13 | FLUFFY AIMERS    | W   | 0.209      | 0.477        | 0.016 (0.002)    | -                | -         |     3.75 | arcade, Lake, micro, Seb, wiz |
|            9 |     3452 | 2024-02-13 | FLUFFY AIMERS    | L   | 0.209      | -            | -                | -                | -         |    -2.88 | arcade, Lake, micro, Seb, wiz |
|            8 |     3612 | 2024-02-02 | Party Astronauts | L   | 0.135      | -            | -                | -                | -         |    -1.08 | arcade, Lake, Seb, Walco, wiz |
|            7 |     3619 | 2024-02-02 | Wildcard         | L   | 0.134      | -            | -                | -                | -         |    -1.21 | arcade, Lake, Seb, Walco, wiz |
|            6 |     3995 | 2024-01-18 | Rocket           | L   | 0.035      | -            | -                | -                | -         |    -0.91 | Lake, Seb, Walco, wiz, Wolffe |
|            5 |     4047 | 2024-01-17 | LOS              | W   | 0.029      | -            | -                | -                | -         |     0.09 | Lake, Seb, Walco, wiz, Wolffe |
|            4 |     4142 | 2024-01-15 | MIGHT            | L   | 0.015      | -            | -                | -                | -         |    -0.39 | Lake, Seb, Walco, wiz, Wolffe |
|            3 |     4169 | 2024-01-14 | Nouns            | L   | 0.010      | -            | -                | -                | -         |    -0.08 | Lake, Seb, Walco, wiz, Wolffe |
|            2 |     4179 | 2024-01-14 | Akimbo           | W   | 0.008      | -            | -                | -                | -         |     0.09 | Lake, Seb, Walco, wiz, Wolffe |
|            1 |     4199 | 2024-01-13 | Rocket           | L   | 0.002      | -            | -                | -                | -         |    -0.05 | Lake, Seb, Walco, wiz, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,978.25)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
