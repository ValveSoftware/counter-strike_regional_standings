### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Louie, Outback, Snakes, Voltage<br />
Global Rank: [102](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  777.4<br />
<br />
Final Rank Value (777.4) = Starting Rank Value (782.5) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.5
- 400 + ( ( 0.198 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 782.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |        5 | 2025-03-01 | BLUEJAYS         | L   | 1.000      | -            | -                | -                | -         |    -6.41 | djay, Louie, Outback, Snakes, Voltage     |
|           15 |        6 | 2025-03-01 | Akimbo LITE      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.29 | djay, Louie, Outback, Snakes, Voltage     |
|           14 |      303 | 2025-02-13 | Getting Info     | L   | 1.000      | -            | -                | -                | -         |   -12.35 | djay, Louie, Outback, Snakes, Voltage     |
|           13 |      372 | 2025-02-10 | Party Astronauts | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.458 (0.065)    | 0 (0.000) |    17.53 | djay, Louie, Outback, Snakes, Voltage     |
|           12 |      377 | 2025-02-10 | Chicken Coop     | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.135 (0.019)    | 0 (0.000) |     9.90 | djay, Louie, Outback, Snakes, Voltage     |
|           11 |      415 | 2025-02-09 | LAG              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.145 (0.021)    | 0 (0.000) |    12.59 | djay, Louie, Outback, PwnAlone, Snakes    |
|           10 |      465 | 2025-02-08 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -13.93 | djay, Louie, Outback, Snakes, Voltage     |
|            9 |     1014 | 2024-12-07 | Undone           | L   | 0.630      | -            | -                | -                | -         |   -10.88 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            8 |     1023 | 2024-12-07 | ROOMBA PEEK      | W   | 0.629      | 0.384        | 0.000 (0.000)    | 0.037 (0.009)    | 1 (0.629) |     4.35 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            7 |     1033 | 2024-12-07 | Not Mythic       | W   | 0.627      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.627) |     2.14 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            6 |     1055 | 2024-12-06 | Sharks           | L   | 0.623      | -            | -                | -                | -         |    -4.65 | djay, Louie, PwnAlone, REKMEISTER, Snakes |
|            5 |     2047 | 2024-10-20 | timbermen        | L   | 0.307      | -            | -                | -                | -         |    -6.38 | djay, Jonji, Louie, PwnAlone, Snakes      |
|            4 |     2069 | 2024-10-19 | Amped            | W   | 0.303      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.303) |     1.01 | djay, Jonji, Louie, PwnAlone, Snakes      |
|            3 |     3090 | 2024-09-17 | undefined        | L   | 0.090      | -            | -                | -                | -         |    -2.04 | djay, Jonji, Louie, PwnAlone, Snakes      |
|            2 |     3140 | 2024-09-15 | Canada           | W   | 0.076      | 0.372        | 0.000 (0.000)    | 0.037 (0.001)    | 0 (0.000) |     0.49 | djay, Jonji, Louie, PwnAlone, Snakes      |
|            1 |     3210 | 2024-09-13 | straykids        | W   | 0.063      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.35 | djay, Jonji, Louie, PwnAlone, Snakes      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($542.69)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.309 | $1,000.00      | $309.13         |
| 2024-09-21 |      0.117 | $2,000.00      | $233.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
