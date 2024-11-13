### Roster Details<br />
Team Name: Arcade<br />
Roster: foggers, Kras, TRIPLUS, versa, void<br />
Global Rank: [182](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_13.md)<br />
Regional Rank: [19]( ../../standings_asia_2024_11_13.md)<br />
<br />
Final Rank Value:  636.7<br />
<br />
Final Rank Value (636.7) = Starting Rank Value (679.1) + Head To Head Adjustments (-42.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 679.1
- 400 + ( ( 0.140 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 679.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      718 | 2024-10-09 | DXA              | L   | 0.965      | -            | -                | -                | -         |   -15.61 | foggers, Kras, TRIPLUS, versa, void    |
|           25 |      723 | 2024-10-09 | DXA              | W   | 0.964      | 0.333        | 0.001 (0.000)    | 0.185 (0.059)    | 0 (0.000) |    14.79 | foggers, Kras, TRIPLUS, versa, void    |
|           24 |     1241 | 2024-09-25 | FlyQuest         | L   | 0.871      | -            | -                | -                | -         |    -0.51 | foggers, Kras, TRIPLUS, versa, void    |
|           23 |     1245 | 2024-09-25 | FlyQuest         | L   | 0.871      | -            | -                | -                | -         |    -0.51 | foggers, Kras, TRIPLUS, versa, void    |
|           22 |     2091 | 2024-08-28 | Mindfreak        | L   | 0.685      | -            | -                | -                | -         |    -8.70 | foggers, supar, TRIPLUS, versa, void   |
|           21 |     2110 | 2024-08-28 | The Art of War   | W   | 0.684      | 0.143        | 0.003 (0.000)    | 0.322 (0.031)    | 0 (0.000) |    12.83 | foggers, supar, TRIPLUS, versa, void   |
|           20 |     2146 | 2024-08-27 | Housebets        | W   | 0.678      | 0.143        | 0.003 (0.000)    | 0.143 (0.014)    | 0 (0.000) |    12.02 | foggers, supar, TRIPLUS, versa, void   |
|           19 |     2155 | 2024-08-27 | Mindfreak        | L   | 0.677      | -            | -                | -                | -         |    -8.01 | foggers, supar, TRIPLUS, versa, void   |
|           18 |     2284 | 2024-08-24 | The Art of War   | L   | 0.658      | -            | -                | -                | -         |    -8.31 | foggers, supar, TRIPLUS, versa, void   |
|           17 |     2288 | 2024-08-24 | Vantage          | W   | 0.657      | 0.143        | 0.000 (0.000)    | 0.098 (0.009)    | 0 (0.000) |     7.77 | foggers, supar, TRIPLUS, versa, void   |
|           16 |     2292 | 2024-08-24 | Abyss            | W   | 0.657      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.49 | foggers, supar, TRIPLUS, versa, void   |
|           15 |     2413 | 2024-08-21 | MANTRA           | L   | 0.638      | -            | -                | -                | -         |   -10.55 | foggers, supar, TRIPLUS, versa, void   |
|           14 |     2424 | 2024-08-21 | MANTRA           | L   | 0.638      | -            | -                | -                | -         |   -11.16 | foggers, supar, TRIPLUS, versa, void   |
|           13 |     2646 | 2024-08-13 | Rooster          | L   | 0.584      | -            | -                | -                | -         |    -8.02 | foggers, supar, TRIPLUS, versa, void   |
|           12 |     2649 | 2024-08-13 | Rooster          | W   | 0.584      | 0.333        | 0.013 (0.003)    | 0.233 (0.045)    | 0 (0.000) |    10.65 | foggers, supar, TRIPLUS, versa, void   |
|           11 |     2733 | 2024-08-10 | Let's go golfing | L   | 0.565      | -            | -                | -                | -         |    -7.17 | foggers, Kobe, Kras, TRIPLUS, versa    |
|           10 |     2737 | 2024-08-10 | The Art of War   | W   | 0.564      | 0.264        | 0.003 (0.000)    | 0.322 (0.048)    | 1 (0.564) |    10.38 | foggers, Kobe, Kras, TRIPLUS, versa    |
|            9 |     2738 | 2024-08-09 | Freaky Saturday  | L   | 0.563      | -            | -                | -                | -         |    -8.23 | foggers, Kobe, Kras, TRIPLUS, versa    |
|            8 |     2839 | 2024-08-07 | The Art of War   | L   | 0.544      | -            | -                | -                | -         |    -7.23 | foggers, supar, TRIPLUS, versa, void   |
|            7 |     2845 | 2024-08-07 | The Art of War   | L   | 0.544      | -            | -                | -                | -         |    -7.58 | foggers, supar, TRIPLUS, versa, void   |
|            6 |     3367 | 2024-07-23 | Mindfreak        | L   | 0.444      | -            | -                | -                | -         |    -6.30 | foggers, Kobe, TRIPLUS, versa, void    |
|            5 |     3372 | 2024-07-23 | Mindfreak        | L   | 0.444      | -            | -                | -                | -         |    -6.55 | foggers, Kobe, TRIPLUS, versa, void    |
|            4 |     3392 | 2024-07-22 | KZG              | L   | 0.438      | -            | -                | -                | -         |    -7.27 | foggers, Kobe, TRIPLUS, versa, void    |
|            3 |     3395 | 2024-07-22 | KZG              | W   | 0.438      | 0.333        | 0.002 (0.000)    | 0.166 (0.024)    | 0 (0.000) |     6.66 | foggers, Kobe, TRIPLUS, versa, void    |
|            2 |     3546 | 2024-07-18 | Housebets        | L   | 0.411      | -            | -                | -                | -         |    -6.66 | foggers, kibstar, TRIPLUS, versa, void |
|            1 |     3553 | 2024-07-18 | Housebets        | W   | 0.411      | 0.333        | 0.003 (0.000)    | 0.143 (0.020)    | 0 (0.000) |     6.43 | foggers, kibstar, TRIPLUS, versa, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($298.12)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $150.00        | $150.00         |
| 2024-08-10 |      0.565 | $262.00        | $148.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
