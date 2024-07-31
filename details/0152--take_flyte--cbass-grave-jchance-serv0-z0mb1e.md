### Roster Details<br />
Team Name: Take Flyte<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Global Rank: [152](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
<br />
Final Rank Value:  704.2<br />
<br />
Final Rank Value (704.2) = Starting Rank Value (716.1) + Head To Head Adjustments (-11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.1
- 400 + ( ( 0.153 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 716.1


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
|           40 |      227 | 2024-07-24 | The Nomads       | W   | 1.000      | 0.371        | 0.000 (0.000)    | -                | 0 (0.000) |     4.85 | cbass, Grave, jchancE, serv0, z0mb1e |
|           39 |      424 | 2024-07-18 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.33 | cbass, Grave, jchancE, serv0, z0mb1e |
|           38 |      429 | 2024-07-18 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -5.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|           37 |      486 | 2024-07-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.23 | cbass, Grave, jchancE, serv0, z0mb1e |
|           36 |      490 | 2024-07-17 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.49 | cbass, Grave, jchancE, serv0, z0mb1e |
|           35 |      551 | 2024-07-16 | Perseverance     | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.248 (0.118)    | 0 (0.000) |    15.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|           34 |      557 | 2024-07-16 | Perseverance     | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.248 (0.118)    | 0 (0.000) |    17.05 | cbass, Grave, jchancE, serv0, z0mb1e |
|           33 |      604 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.77 | cbass, Grave, jchancE, serv0, z0mb1e |
|           32 |      609 | 2024-07-15 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.00 | cbass, Grave, jchancE, serv0, z0mb1e |
|           31 |      864 | 2024-06-15 | Akimbo           | W   | 0.895      | 0.143        | 0.016 (0.002)    | 0.276 (0.035)    | 0 (0.000) |    18.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |      899 | 2024-06-14 | E-Xolos LAZER    | W   | 0.889      | 0.143        | 0.011 (0.001)    | 0.347 (0.044)    | 0 (0.000) |    18.41 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |     1655 | 2024-05-22 | Wildcard         | L   | 0.735      | -            | -                | -                | -         |    -3.61 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |     1659 | 2024-05-22 | Wildcard         | L   | 0.735      | -            | -                | -                | -         |    -3.73 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |     1705 | 2024-05-21 | Elevate          | L   | 0.728      | -            | -                | -                | -         |    -3.38 | cbass, Champ, jchancE, serv0, z0mb1e |
|           26 |     1709 | 2024-05-21 | Elevate          | L   | 0.728      | -            | -                | -                | -         |    -3.49 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |     1742 | 2024-05-20 | MIGHT            | W   | 0.722      | 0.477        | -                | 0.062 (0.021)    | 0 (0.000) |     7.07 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |     1747 | 2024-05-20 | MIGHT            | L   | 0.721      | -            | -                | -                | -         |   -16.07 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     1871 | 2024-05-16 | Limitless        | L   | 0.695      | -            | -                | -                | -         |    -7.68 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     1872 | 2024-05-16 | Limitless        | L   | 0.695      | -            | -                | -                | -         |    -8.12 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1912 | 2024-05-15 | M80              | L   | 0.688      | -            | -                | -                | -         |    -0.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     1918 | 2024-05-15 | M80              | L   | 0.688      | -            | -                | -                | -         |    -0.85 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     1964 | 2024-05-14 | NRG              | L   | 0.681      | -            | -                | -                | -         |    -5.17 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     1970 | 2024-05-14 | NRG              | L   | 0.681      | -            | -                | -                | -         |    -5.40 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     2449 | 2024-04-23 | Nouns            | W   | 0.542      | 0.477        | 0.058 (0.015)    | 0.546 (0.141)    | 0 (0.000) |    13.57 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     2451 | 2024-04-23 | Nouns            | L   | 0.541      | -            | -                | -                | -         |    -3.45 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     2789 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.455      | 0.477        | 0.010 (0.002)    | 0.105 (0.023)    | 0 (0.000) |     8.48 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     2794 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.455      | -            | -                | -                | -         |    -5.96 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2846 | 2024-04-09 | Party Astronauts | L   | 0.448      | -            | -                | -                | -         |    -2.83 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2853 | 2024-04-09 | Party Astronauts | L   | 0.448      | -            | -                | -                | -         |    -2.90 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2978 | 2024-04-04 | Limitless        | W   | 0.415      | 0.477        | 0.001 (0.000)    | 0.170 (0.034)    | 0 (0.000) |     5.76 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     2983 | 2024-04-04 | Limitless        | L   | 0.415      | -            | -                | -                | -         |    -7.47 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     3154 | 2024-03-27 | BOSS             | L   | 0.362      | -            | -                | -                | -         |    -4.23 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     3158 | 2024-03-27 | BOSS             | W   | 0.362      | 0.477        | 0.014 (0.002)    | 0.334 (0.058)    | 0 (0.000) |     7.32 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     3397 | 2024-03-14 | Mythic           | L   | 0.275      | -            | -                | -                | -         |    -3.33 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     3401 | 2024-03-14 | Mythic           | L   | 0.275      | -            | -                | -                | -         |    -3.41 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     3646 | 2024-03-05 | LAG              | L   | 0.215      | -            | -                | -                | -         |    -2.06 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     3648 | 2024-03-05 | LAG              | L   | 0.215      | -            | -                | -                | -         |    -2.09 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     3903 | 2024-02-22 | Party Astronauts | L   | 0.134      | -            | -                | -                | -         |    -0.95 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     4144 | 2024-02-13 | Perseverance     | W   | 0.075      | 0.477        | 0.004 (0.000)    | 0.248 (0.009)    | -         |     1.27 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     4147 | 2024-02-13 | Perseverance     | L   | 0.075      | -            | -                | -                | -         |    -1.10 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($684.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
