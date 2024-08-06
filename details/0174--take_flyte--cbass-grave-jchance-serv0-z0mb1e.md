### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Global Rank: [174](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [49]( ../standings_americas.md)<br />
<br />
Final Rank Value:  652.2<br />
<br />
Final Rank Value (652.2) = Starting Rank Value (713.0) + Head To Head Adjustments (-60.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 713.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       46 | 2024-08-04 | Final Form       | L   | 1.000      | -            | -                | -                | -         |   -19.55 | cbass, Grave, jchancE, serv0, z0mb1e |
|           43 |       85 | 2024-08-03 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -3.34 | cbass, Champ, jchancE, serv0, z0mb1e |
|           42 |      188 | 2024-07-31 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -13.32 | cbass, Grave, jchancE, serv0, z0mb1e |
|           41 |      193 | 2024-07-31 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -14.53 | cbass, Grave, jchancE, serv0, z0mb1e |
|           40 |      435 | 2024-07-24 | InControl        | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.038 (0.014)    | 0 (0.000) |     4.88 | cbass, Grave, jchancE, serv0, z0mb1e |
|           39 |      632 | 2024-07-18 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.36 | cbass, Grave, jchancE, serv0, z0mb1e |
|           38 |      637 | 2024-07-18 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.64 | cbass, Grave, jchancE, serv0, z0mb1e |
|           37 |      694 | 2024-07-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|           36 |      698 | 2024-07-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.56 | cbass, Grave, jchancE, serv0, z0mb1e |
|           35 |      759 | 2024-07-16 | Phoenix          | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.270 (0.129)    | 0 (0.000) |    15.63 | cbass, Grave, jchancE, serv0, z0mb1e |
|           34 |      765 | 2024-07-16 | Phoenix          | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.270 (0.129)    | 0 (0.000) |    17.07 | cbass, Grave, jchancE, serv0, z0mb1e |
|           33 |      812 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.87 | cbass, Grave, jchancE, serv0, z0mb1e |
|           32 |      817 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.10 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |     1072 | 2024-06-15 | Akimbo           | W   | 0.856      | 0.143        | 0.015 (0.002)    | 0.263 (0.032)    | 0 (0.000) |    17.38 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |     1107 | 2024-06-14 | E-Xolos LAZER    | W   | 0.849      | 0.143        | 0.010 (0.001)    | 0.376 (0.046)    | 0 (0.000) |    17.99 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1863 | 2024-05-22 | Wildcard         | L   | 0.696      | -            | -                | -                | -         |    -3.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     1867 | 2024-05-22 | Wildcard         | L   | 0.696      | -            | -                | -                | -         |    -3.55 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     1913 | 2024-05-21 | Elevate          | L   | 0.689      | -            | -                | -                | -         |    -3.15 | cbass, Champ, jchancE, serv0, z0mb1e |
|           26 |     1917 | 2024-05-21 | Elevate          | L   | 0.689      | -            | -                | -                | -         |    -3.24 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |     1950 | 2024-05-20 | MIGHT            | W   | 0.682      | 0.477        | -                | 0.056 (0.018)    | 0 (0.000) |     6.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     1955 | 2024-05-20 | MIGHT            | L   | 0.682      | -            | -                | -                | -         |   -15.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     2079 | 2024-05-16 | Limitless        | L   | 0.656      | -            | -                | -                | -         |    -7.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     2080 | 2024-05-16 | Limitless        | L   | 0.655      | -            | -                | -                | -         |    -7.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     2120 | 2024-05-15 | M80              | L   | 0.649      | -            | -                | -                | -         |    -0.85 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     2126 | 2024-05-15 | M80              | L   | 0.649      | -            | -                | -                | -         |    -0.86 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     2172 | 2024-05-14 | NRG              | L   | 0.642      | -            | -                | -                | -         |    -4.65 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     2178 | 2024-05-14 | NRG              | L   | 0.642      | -            | -                | -                | -         |    -4.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     2657 | 2024-04-23 | Nouns            | W   | 0.502      | 0.477        | 0.057 (0.014)    | 0.566 (0.136)    | 0 (0.000) |    12.52 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     2659 | 2024-04-23 | Nouns            | L   | 0.502      | -            | -                | -                | -         |    -3.29 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2997 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.416      | 0.477        | 0.010 (0.002)    | 0.095 (0.019)    | 0 (0.000) |     7.68 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     3002 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.416      | -            | -                | -                | -         |    -5.52 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     3054 | 2024-04-09 | Party Astronauts | L   | 0.409      | -            | -                | -                | -         |    -2.65 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     3061 | 2024-04-09 | Party Astronauts | L   | 0.409      | -            | -                | -                | -         |    -2.71 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     3186 | 2024-04-04 | Limitless        | W   | 0.376      | 0.477        | 0.001 (0.000)    | 0.159 (0.028)    | 0 (0.000) |     5.20 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     3191 | 2024-04-04 | Limitless        | L   | 0.375      | -            | -                | -                | -         |    -6.78 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     3362 | 2024-03-27 | BOSS             | L   | 0.323      | -            | -                | -                | -         |    -3.78 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     3366 | 2024-03-27 | BOSS             | W   | 0.322      | 0.477        | 0.014 (0.002)    | 0.318 (0.049)    | 0 (0.000) |     6.50 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     3605 | 2024-03-14 | Mythic           | L   | 0.236      | -            | -                | -                | -         |    -2.88 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     3609 | 2024-03-14 | Mythic           | L   | 0.236      | -            | -                | -                | -         |    -2.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     3854 | 2024-03-05 | LAG              | L   | 0.176      | -            | -                | -                | -         |    -1.74 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     3856 | 2024-03-05 | LAG              | L   | 0.176      | -            | -                | -                | -         |    -1.76 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     4111 | 2024-02-22 | Party Astronauts | L   | 0.095      | -            | -                | -                | -         |    -0.68 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4352 | 2024-02-13 | Phoenix          | W   | 0.036      | 0.477        | 0.004 (0.000)    | -                | -         |     0.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4355 | 2024-02-13 | Phoenix          | L   | 0.036      | -            | -                | -                | -         |    -0.52 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($652.67)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
