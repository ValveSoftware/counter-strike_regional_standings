### Roster Details<br />
Team Name: Yawara<br />
Roster: j0w, lash, PremiuM, revoltz, stAx<br />
Global Rank: [218](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_11.md)<br />
Regional Rank: [60]( ../../standings_americas_2024_09_11.md)<br />
<br />
Final Rank Value:  468.8<br />
<br />
Final Rank Value (468.8) = Starting Rank Value (499.1) + Head To Head Adjustments (-30.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.1
- 400 + ( ( 0.051 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 499.1


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
|           17 |      123 | 2024-09-06 | Bad News Chickens | L   | 1.000      | -            | -                | -                | -         |    -7.73 | j0w, lash, PremiuM, revoltz, stAx |
|           16 |      256 | 2024-09-02 | Sharks            | L   | 1.000      | -            | -                | -                | -         |    -1.75 | j0w, lash, PremiuM, revoltz, stAx |
|           15 |     1358 | 2024-08-01 | Bounty Hunters    | L   | 0.928      | -            | -                | -                | -         |    -2.81 | j0w, lash, revoltz, ritz, stAx    |
|           14 |     1605 | 2024-07-25 | Imperial          | L   | 0.882      | -            | -                | -                | -         |    -0.87 | j0w, lash, revoltz, ritz, stAx    |
|           13 |     1650 | 2024-07-24 | W7M               | L   | 0.874      | -            | -                | -                | -         |    -4.42 | j0w, lash, revoltz, ritz, stAx    |
|           12 |     1654 | 2024-07-24 | Sharks            | L   | 0.873      | -            | -                | -                | -         |    -1.68 | j0w, lash, revoltz, ritz, stAx    |
|           11 |     1735 | 2024-07-21 | Galorys           | L   | 0.855      | -            | -                | -                | -         |    -4.76 | j0w, lash, revoltz, ritz, stAx    |
|           10 |     1820 | 2024-07-19 | SPORT             | W   | 0.840      | 0.371        | 0.004 (0.001)    | 0.083 (0.026)    | 0 (0.000) |    19.29 | j0w, lash, revoltz, ritz, stAx    |
|            9 |     1943 | 2024-07-17 | KRÜ               | L   | 0.826      | -            | -                | -                | -         |    -2.84 | j0w, lash, revoltz, ritz, stAx    |
|            8 |     2046 | 2024-07-15 | inSanitY          | L   | 0.813      | -            | -                | -                | -         |    -1.46 | j0w, lash, revoltz, ritz, stAx    |
|            7 |     2892 | 2024-05-31 | 9z Academy        | L   | 0.513      | -            | -                | -                | -         |    -7.74 | j0w, lash, ritz, stAx, Straafer   |
|            6 |     2929 | 2024-05-29 | Vikings KR        | L   | 0.502      | -            | -                | -                | -         |    -2.94 | j0w, lash, perez, ritz, stAx      |
|            5 |     2956 | 2024-05-28 | W7M               | L   | 0.495      | -            | -                | -                | -         |    -2.93 | j0w, lash, perez, ritz, stAx      |
|            4 |     3300 | 2024-05-16 | Case              | L   | 0.413      | -            | -                | -                | -         |    -1.09 | j0w, lash, perez, ritz, stAx      |
|            3 |     3429 | 2024-05-13 | Galorys           | L   | 0.394      | -            | -                | -                | -         |    -2.40 | j0w, lash, perez, ritz, stAx      |
|            2 |     3553 | 2024-05-08 | Intense           | L   | 0.360      | -            | -                | -                | -         |    -2.68 | j0w, lash, perez, ritz, stAx      |
|            1 |     3582 | 2024-05-06 | Solid             | L   | 0.348      | -            | -                | -                | -         |    -1.50 | j0w, lash, perez, ritz, stAx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
