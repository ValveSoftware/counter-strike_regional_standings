### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, M1key, MoDo<br />
Global Rank: [66](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1048.2<br />
<br />
Final Rank Value (1048.2) = Starting Rank Value (1001.1) + Head To Head Adjustments (47.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.447[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.299<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.1
- 400 + ( ( 0.299 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1001.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      498 | 2024-11-10 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |   -12.38 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           35 |      552 | 2024-11-07 | NAVI Junior     | L   | 1.000      | -            | -                | -                | -         |   -12.93 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           34 |      557 | 2024-11-07 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -15.64 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           33 |      568 | 2024-11-06 | BetBoom         | W   | 1.000      | 0.426        | 0.117 (0.050)    | 0.517 (0.220)    | 0 (0.000) |    21.04 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           32 |      587 | 2024-11-05 | Permitta        | W   | 1.000      | 0.384        | 0.064 (0.025)    | 1.000 (0.384)    | 0 (0.000) |    13.15 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           31 |      629 | 2024-11-03 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -3.33 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           30 |      650 | 2024-11-02 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -1.02 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           29 |      674 | 2024-11-01 | Johnny Speeds   | L   | 0.994      | -            | -                | -                | -         |   -13.09 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           28 |      724 | 2024-10-30 | 9INE            | L   | 0.979      | -            | -                | -                | -         |   -14.98 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           27 |      739 | 2024-10-29 | Zero Tenacity   | W   | 0.973      | 0.426        | 0.082 (0.034)    | 0.724 (0.300)    | 0 (0.000) |    16.70 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           26 |      742 | 2024-10-29 | Wu-Tang         | W   | 0.973      | -            | -                | -                | 0 (0.000) |     0.70 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           25 |      751 | 2024-10-28 | 500             | L   | 0.967      | -            | -                | -                | -         |   -17.81 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           24 |      802 | 2024-10-26 | BIG             | W   | 0.952      | 0.477        | 0.162 (0.073)    | 0.528 (0.240)    | 0 (0.000) |    26.59 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           23 |      818 | 2024-10-25 | Virtus.pro      | W   | 0.946      | 0.477        | 0.217 (0.098)    | 0.395 (0.178)    | 0 (0.000) |    27.66 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           22 |      860 | 2024-10-21 | 3DMAX           | L   | 0.921      | -            | -                | -                | -         |    -2.83 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           21 |      863 | 2024-10-21 | Virtus.pro      | W   | 0.920      | 0.477        | 0.217 (0.095)    | 0.395 (0.173)    | 0 (0.000) |    27.34 | Buzz, Chr1zN, F1KU, M1key, MoDo  |
|           20 |     1080 | 2024-10-10 | Spirit Academy  | L   | 0.847      | -            | -                | -                | -         |   -11.01 | Buzz, Chr1zN, F1KU, MoDo, spooke |
|           19 |     1515 | 2024-09-27 | Apogee          | L   | 0.761      | -            | -                | -                | -         |   -16.44 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           18 |     1525 | 2024-09-27 | B8              | L   | 0.760      | -            | -                | -                | -         |    -5.97 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           17 |     1971 | 2024-09-14 | Sashi           | L   | 0.673      | -            | -                | -                | -         |    -9.62 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           16 |     2042 | 2024-09-12 | Sampi           | W   | 0.659      | 0.384        | 0.039 (0.010)    | 0.490 (0.124)    | 0 (0.000) |     9.87 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           15 |     2368 | 2024-08-31 | ALTERNATE aTTaX | L   | 0.580      | -            | -                | -                | -         |    -6.25 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           14 |     2387 | 2024-08-30 | Endpoint        | W   | 0.573      | 0.384        | 0.038 (0.008)    | 0.627 (0.138)    | 0 (0.000) |     6.78 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           13 |     2595 | 2024-08-26 | fnatic          | L   | 0.548      | -            | -                | -                | -         |    -3.13 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           12 |     2610 | 2024-08-26 | Falcons         | L   | 0.547      | -            | -                | -                | -         |    -4.10 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           11 |     2656 | 2024-08-25 | FaZe            | L   | 0.540      | -            | -                | -                | -         |    -0.60 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|           10 |     2695 | 2024-08-23 | AMKAL           | W   | 0.529      | -            | -                | -                | 0 (0.000) |     4.72 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            9 |     2703 | 2024-08-23 | Sashi           | L   | 0.527      | -            | -                | -                | -         |    -7.89 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            8 |     2709 | 2024-08-23 | Passion UA      | L   | 0.526      | -            | -                | -                | -         |    -3.80 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            7 |     2747 | 2024-08-22 | Rebels          | W   | 0.519      | -            | -                | -                | -         |     5.59 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            6 |     2769 | 2024-08-21 | HEROIC          | W   | 0.514      | 0.535        | 0.628 (0.173)    | 0.552 (0.152)    | -         |    15.82 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            5 |     2782 | 2024-08-21 | Zero Tenacity   | W   | 0.513      | -            | -                | -                | -         |     9.47 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            4 |     2818 | 2024-08-21 | SAW             | L   | 0.512      | -            | -                | -                | -         |    -0.56 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            3 |     2962 | 2024-08-15 | B8              | W   | 0.475      | 0.143        | 0.172 (0.012)    | 0.787 (0.053)    | -         |    11.98 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            2 |     2968 | 2024-08-15 | PARIVISION      | W   | 0.474      | -            | -                | -                | -         |     8.77 | Buzz, Chr1zN, F1KU, MoDo, Nexius |
|            1 |     2973 | 2024-08-15 | ARCRED          | W   | 0.474      | -            | -                | -                | -         |     4.33 | Buzz, Chr1zN, F1KU, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,112.29)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-09-14 |      0.674 | $2,000.00      | $1,348.42       |
| 2024-08-25 |      0.541 | $12,500.00     | $6,763.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
