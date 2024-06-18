### Roster Details<br />
Team Name: One More<br />
Roster: cbass, Grave, jchancE, serv0, z0mb1e<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [150](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  709.2<br />
<br />
Final Rank Value (709.2) = Starting Rank Value (731.6) + Head To Head Adjustments (-22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 731.6
- 400 + ( ( 0.163 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 731.6


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
|           31 |       34 | 2024-06-15 | OMiT             | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.311 (0.044)    | 0 (0.000) |    21.93 | cbass, Grave, jchancE, serv0, z0mb1e |
|           30 |       69 | 2024-06-14 | E-Xolos LAZER    | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.249 (0.036)    | 0 (0.000) |    20.28 | cbass, Grave, jchancE, serv0, z0mb1e |
|           29 |      827 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -3.94 | cbass, Grave, jchancE, serv0, z0mb1e |
|           28 |      831 | 2024-05-22 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -4.10 | cbass, Grave, jchancE, serv0, z0mb1e |
|           27 |      877 | 2024-05-21 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.15 | cbass, Champ, jchancE, serv0, z0mb1e |
|           26 |      881 | 2024-05-21 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.41 | cbass, Champ, jchancE, serv0, z0mb1e |
|           25 |      914 | 2024-05-20 | MIGHT            | W   | 1.000      | 0.477        | 0.000 (0.000)    | 0.111 (0.053)    | 0 (0.000) |    11.03 | cbass, Grave, jchancE, serv0, z0mb1e |
|           24 |      919 | 2024-05-20 | MIGHT            | L   | 1.000      | -            | -                | -                | -         |   -20.88 | cbass, Grave, jchancE, serv0, z0mb1e |
|           23 |     1043 | 2024-05-16 | Carpe Diem       | L   | 0.985      | -            | -                | -                | -         |   -10.58 | cbass, Grave, jchancE, serv0, z0mb1e |
|           22 |     1044 | 2024-05-16 | Carpe Diem       | L   | 0.984      | -            | -                | -                | -         |   -11.46 | cbass, Grave, jchancE, serv0, z0mb1e |
|           21 |     1084 | 2024-05-15 | M80              | L   | 0.978      | -            | -                | -                | -         |    -1.34 | cbass, Grave, jchancE, serv0, z0mb1e |
|           20 |     1090 | 2024-05-15 | M80              | L   | 0.978      | -            | -                | -                | -         |    -1.36 | cbass, Grave, jchancE, serv0, z0mb1e |
|           19 |     1136 | 2024-05-14 | NRG              | L   | 0.971      | -            | -                | -                | -         |    -5.84 | cbass, Grave, jchancE, serv0, z0mb1e |
|           18 |     1142 | 2024-05-14 | NRG              | L   | 0.971      | -            | -                | -                | -         |    -6.16 | cbass, Grave, jchancE, serv0, z0mb1e |
|           17 |     1621 | 2024-04-23 | Nouns            | W   | 0.831      | 0.477        | 0.081 (0.032)    | 0.504 (0.200)    | 0 (0.000) |    21.86 | cbass, Grave, jchancE, serv0, z0mb1e |
|           16 |     1623 | 2024-04-23 | Nouns            | L   | 0.831      | -            | -                | -                | -         |    -4.08 | cbass, Grave, jchancE, serv0, z0mb1e |
|           15 |     1961 | 2024-04-10 | FLUFFY AIMERS    | W   | 0.745      | 0.477        | 0.016 (0.006)    | 0.311 (0.111)    | 0 (0.000) |    15.39 | cbass, Grave, jchancE, serv0, z0mb1e |
|           14 |     1966 | 2024-04-10 | FLUFFY AIMERS    | L   | 0.745      | -            | -                | -                | -         |    -8.03 | cbass, Grave, jchancE, serv0, z0mb1e |
|           13 |     2018 | 2024-04-09 | Party Astronauts | L   | 0.738      | -            | -                | -                | -         |    -3.85 | cbass, Grave, jchancE, serv0, z0mb1e |
|           12 |     2025 | 2024-04-09 | Party Astronauts | L   | 0.738      | -            | -                | -                | -         |    -3.99 | cbass, Grave, jchancE, serv0, z0mb1e |
|           11 |     2150 | 2024-04-04 | Limitless        | W   | 0.705      | 0.477        | 0.001 (0.000)    | 0.227 (0.076)    | 0 (0.000) |    10.43 | cbass, Grave, jchancE, serv0, z0mb1e |
|           10 |     2155 | 2024-04-04 | Limitless        | L   | 0.704      | -            | -                | -                | -         |   -12.02 | cbass, Grave, jchancE, serv0, z0mb1e |
|            9 |     2327 | 2024-03-27 | BOSS             | L   | 0.652      | -            | -                | -                | -         |    -7.42 | cbass, Grave, jchancE, serv0, z0mb1e |
|            8 |     2331 | 2024-03-27 | BOSS             | W   | 0.651      | 0.477        | 0.021 (0.007)    | 0.386 (0.120)    | 0 (0.000) |    13.46 | cbass, Grave, jchancE, serv0, z0mb1e |
|            7 |     2570 | 2024-03-14 | Mythic           | L   | 0.565      | -            | -                | -                | -         |    -5.69 | cbass, Grave, jchancE, serv0, z0mb1e |
|            6 |     2574 | 2024-03-14 | Mythic           | L   | 0.565      | -            | -                | -                | -         |    -5.95 | cbass, Grave, jchancE, serv0, z0mb1e |
|            5 |     2819 | 2024-03-05 | LAG              | L   | 0.505      | -            | -                | -                | -         |    -4.26 | cbass, Grave, jchancE, serv0, z0mb1e |
|            4 |     2821 | 2024-03-05 | LAG              | L   | 0.505      | -            | -                | -                | -         |    -4.41 | cbass, Grave, jchancE, serv0, z0mb1e |
|            3 |     3076 | 2024-02-22 | Party Astronauts | L   | 0.424      | -            | -                | -                | -         |    -2.78 | cbass, Grave, jchancE, serv0, z0mb1e |
|            2 |     3317 | 2024-02-13 | Take Flyte       | W   | 0.365      | 0.477        | 0.005 (0.001)    | 0.306 (0.053)    | 0 (0.000) |     6.75 | cbass, Grave, jchancE, serv0, z0mb1e |
|            1 |     3320 | 2024-02-13 | Take Flyte       | L   | 0.365      | -            | -                | -                | -         |    -4.83 | cbass, Grave, jchancE, serv0, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
