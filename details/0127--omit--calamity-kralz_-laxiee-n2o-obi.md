### Roster Details<br />
Team Name: OMiT<br />
Roster: calamity, kralz , laxiee, N2o, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  787.8<br />
<br />
Final Rank Value (787.8) = Starting Rank Value (778.4) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.4
- 400 + ( ( 0.187 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 778.4


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
|           23 |      595 | 2024-06-16 | E-Xolos LAZER    | L   | 0.949      | -            | -                | -                | -         |   -14.93 | calamity, kralz , laxiee, N2o, obi     |
|           22 |      622 | 2024-06-15 | Take Flyte       | L   | 0.943      | -            | -                | -                | -         |   -19.56 | calamity, kralz , laxiee, N2o, obi     |
|           21 |      628 | 2024-06-15 | Legacy           | L   | 0.941      | -            | -                | -                | -         |    -6.16 | calamity, kralz , laxiee, N2o, obi     |
|           20 |      658 | 2024-06-14 | Strife           | W   | 0.936      | 0.143        | 0.010 (0.001)    | 0.138 (0.019)    | 0 (0.000) |     8.96 | calamity, kralz , laxiee, N2o, obi     |
|           19 |      664 | 2024-06-14 | Perseverance     | W   | 0.934      | 0.371        | 0.005 (0.002)    | 0.243 (0.084)    | 0 (0.000) |    12.26 | calamity, kralz , laxiee, N2o, obi     |
|           18 |      775 | 2024-06-10 | Legacy           | L   | 0.909      | -            | -                | -                | -         |    -5.79 | calamity, kralz , laxiee, N2o, obi     |
|           17 |      809 | 2024-06-09 | E-Xolos LAZER    | W   | 0.903      | 0.368        | 0.013 (0.004)    | 0.301 (0.100)    | 0 (0.000) |    12.38 | calamity, kralz , laxiee, N2o, obi     |
|           16 |      870 | 2024-06-08 | Snakes Den       | W   | 0.896      | 0.371        | 0.000 (0.000)    | 0.108 (0.036)    | 0 (0.000) |     5.66 | calamity, kralz , laxiee, obi, tmk     |
|           15 |      981 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.883      | 0.371        | 0.004 (0.001)    | 0.173 (0.057)    | 0 (0.000) |    10.26 | calamity, kralz , laxiee, N2o, obi     |
|           14 |      992 | 2024-06-06 | Legacy           | L   | 0.881      | -            | -                | -                | -         |    -5.47 | calamity, kralz , laxiee, N2o, obi     |
|           13 |     1108 | 2024-06-04 | Final Form       | W   | 0.869      | 0.371        | 0.004 (0.001)    | 0.074 (0.024)    | 0 (0.000) |     8.81 | calamity, kralz , laxiee, N2o, obi     |
|           12 |     1144 | 2024-06-03 | Villainous       | W   | 0.862      | 0.368        | 0.004 (0.001)    | -                | 0 (0.000) |     5.75 | calamity, kralz , laxiee, N2o, obi     |
|           11 |     1498 | 2024-05-20 | Party Astronauts | L   | 0.769      | -            | -                | -                | -         |    -6.65 | calamity, kralz , laxiee, N2o, obi     |
|           10 |     2398 | 2024-04-17 | Liquid           | L   | 0.548      | -            | -                | -                | -         |    -0.39 | calamity, kralz , laxiee, N2o, obi     |
|            9 |     2402 | 2024-04-17 | NRG              | W   | 0.548      | 0.143        | 0.025 (0.002)    | 0.574 (0.045)    | 0 (0.000) |    11.20 | calamity, kralz , laxiee, N2o, obi     |
|            8 |     3089 | 2024-03-17 | LAG              | L   | 0.343      | -            | -                | -                | -         |    -3.81 | arviast, C4LLM3SU3, calamity, N2o, obi |
|            7 |     3090 | 2024-03-17 | Xiaoma           | W   | 0.342      | 0.333        | 0.001 (0.000)    | 0.014 (0.002)    | 1 (0.342) |     2.43 | arviast, C4LLM3SU3, calamity, N2o, obi |
|            6 |     3097 | 2024-03-17 | Snakes Den       | W   | 0.341      | 0.333        | -                | 0.108 (0.012)    | 1 (0.341) |     2.16 | arviast, C4LLM3SU3, calamity, N2o, obi |
|            5 |     3623 | 2024-02-24 | Wildcard         | L   | 0.195      | -            | -                | -                | -         |    -1.81 | C4LLM3SU3, calamity, laxiee, N2o, obi  |
|            4 |     3734 | 2024-02-19 | Mythic           | L   | 0.163      | -            | -                | -                | -         |    -2.26 | C4LLM3SU3, calamity, laxiee, N2o, obi  |
|            3 |     3736 | 2024-02-19 | Party Astronauts | L   | 0.162      | -            | -                | -                | -         |    -1.42 | C4LLM3SU3, calamity, laxiee, N2o, obi  |
|            2 |     3803 | 2024-02-16 | Rocket           | L   | 0.142      | -            | -                | -                | -         |    -3.68 | C4LLM3SU3, calamity, N2o, obi, tmk     |
|            1 |     3833 | 2024-02-15 | Limitless        | W   | 0.136      | 0.143        | 0.001 (0.000)    | 0.196 (0.004)    | -         |     1.48 | C4LLM3SU3, calamity, N2o, obi, tmk     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,477.96)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $750.00        | $711.74         |
| 2024-06-10 |      0.909 | $4,300.00      | $3,908.48       |
| 2024-03-17 |      0.343 | $2,500.00      | $857.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
