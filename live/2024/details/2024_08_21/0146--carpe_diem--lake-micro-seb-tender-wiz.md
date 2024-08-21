### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: Lake, micro, Seb, Tender, wiz<br />
Global Rank: [146](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_21.md)<br />
Regional Rank: [39]( ../../standings_americas_2024_08_21.md)<br />
<br />
Final Rank Value:  725.1<br />
<br />
Final Rank Value (725.1) = Starting Rank Value (729.5) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.5
- 400 + ( ( 0.166 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 729.5


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
|           30 |     1657 | 2024-06-13 | E-Xolos LAZER    | L   | 0.740      | -            | -                | -                | -         |   -10.06 | Lake, micro, Seb, Tender, wiz |
|           29 |     2012 | 2024-06-05 | LAG              | L   | 0.687      | -            | -                | -                | -         |    -8.83 | Lake, micro, Seb, Tender, wiz |
|           28 |     2055 | 2024-06-04 | LAG              | L   | 0.682      | -            | -                | -                | -         |    -9.29 | Lake, micro, Seb, Tender, wiz |
|           27 |     2366 | 2024-05-22 | MIGHT            | W   | 0.595      | 0.477        | -                | 0.038 (0.011)    | 0 (0.000) |     3.68 | Lake, micro, Seb, Tender, wiz |
|           26 |     2373 | 2024-05-22 | MIGHT            | W   | 0.595      | 0.477        | -                | 0.038 (0.011)    | 0 (0.000) |     3.80 | Lake, micro, Seb, Tender, wiz |
|           25 |     2419 | 2024-05-21 | Legacy           | L   | 0.588      | -            | -                | -                | -         |    -4.79 | Lake, micro, Seb, Tender, wiz |
|           24 |     2423 | 2024-05-21 | Wildcard         | L   | 0.587      | -            | -                | -                | -         |    -4.52 | Lake, micro, Seb, Tender, wiz |
|           23 |     2429 | 2024-05-21 | Wildcard         | L   | 0.587      | -            | -                | -                | -         |    -4.70 | Lake, micro, Seb, Tender, wiz |
|           22 |     2453 | 2024-05-20 | BOSS             | W   | 0.581      | 0.477        | 0.015 (0.004)    | 0.321 (0.089)    | 0 (0.000) |     9.83 | Lake, micro, Seb, Tender, wiz |
|           21 |     2457 | 2024-05-20 | BOSS             | L   | 0.581      | -            | -                | -                | -         |    -8.64 | Lake, micro, Seb, Tender, wiz |
|           20 |     2579 | 2024-05-16 | Take Flyte       | W   | 0.555      | 0.477        | 0.002 (0.000)    | 0.219 (0.058)    | 0 (0.000) |     7.07 | Lake, micro, Seb, Tender, wiz |
|           19 |     2580 | 2024-05-16 | Take Flyte       | W   | 0.555      | 0.477        | 0.002 (0.000)    | 0.219 (0.058)    | 0 (0.000) |     7.42 | Lake, micro, Seb, Tender, wiz |
|           18 |     2617 | 2024-05-15 | Nouns            | W   | 0.548      | 0.477        | 0.065 (0.017)    | 0.530 (0.138)    | 0 (0.000) |    12.60 | Lake, micro, Seb, Tender, wiz |
|           17 |     2622 | 2024-05-15 | Nouns            | W   | 0.548      | 0.477        | 0.065 (0.017)    | 0.530 (0.138)    | 0 (0.000) |    13.07 | Lake, micro, Seb, Tender, wiz |
|           16 |     2673 | 2024-05-14 | LAG              | L   | 0.541      | -            | -                | -                | -         |    -6.84 | Lake, micro, Seb, Tender, wiz |
|           15 |     2680 | 2024-05-14 | LAG              | W   | 0.541      | 0.477        | 0.010 (0.003)    | 0.426 (0.110)    | 0 (0.000) |    10.48 | Lake, micro, Seb, Tender, wiz |
|           14 |     3467 | 2024-04-11 | Mythic           | W   | 0.322      | 0.477        | 0.009 (0.001)    | 0.275 (0.042)    | 0 (0.000) |     6.04 | arcade, Lake, micro, Seb, wiz |
|           13 |     3470 | 2024-04-11 | Mythic           | L   | 0.321      | -            | -                | -                | -         |    -4.15 | arcade, Lake, micro, Seb, wiz |
|           12 |     3557 | 2024-04-09 | NRG              | L   | 0.308      | -            | -                | -                | -         |    -2.95 | arcade, Lake, micro, Seb, wiz |
|           11 |     3560 | 2024-04-09 | NRG              | L   | 0.308      | -            | -                | -                | -         |    -3.02 | arcade, Lake, micro, Seb, wiz |
|           10 |     3684 | 2024-04-04 | Phoenix          | L   | 0.275      | -            | -                | -                | -         |    -4.29 | arcade, Lake, micro, Seb, wiz |
|            9 |     3690 | 2024-04-04 | Phoenix          | L   | 0.275      | -            | -                | -                | -         |    -4.39 | arcade, Lake, micro, Seb, wiz |
|            8 |     3863 | 2024-03-27 | Party Astronauts | L   | 0.222      | -            | -                | -                | -         |    -1.80 | arcade, Lake, micro, Seb, wiz |
|            7 |     3867 | 2024-03-27 | Party Astronauts | L   | 0.222      | -            | -                | -                | -         |    -1.83 | arcade, Lake, micro, Seb, wiz |
|            6 |     4082 | 2024-03-15 | Elevate          | L   | 0.142      | -            | -                | -                | -         |    -0.90 | arcade, Lake, micro, Seb, wiz |
|            5 |     4084 | 2024-03-15 | Elevate          | L   | 0.142      | -            | -                | -                | -         |    -0.90 | arcade, Lake, micro, Seb, wiz |
|            4 |     4144 | 2024-03-13 | Party Astronauts | L   | 0.127      | -            | -                | -                | -         |    -1.07 | arcade, Lake, micro, Seb, wiz |
|            3 |     4181 | 2024-03-12 | NRG              | W   | 0.121      | 0.143        | 0.034 (0.001)    | 0.608 (0.011)    | 0 (0.000) |     2.57 | arcade, Lake, micro, Seb, wiz |
|            2 |     4316 | 2024-03-06 | Limitless        | W   | 0.082      | 0.477        | 0.001 (0.000)    | -                | -         |     0.96 | arcade, Lake, micro, Seb, wiz |
|            1 |     4319 | 2024-03-06 | Limitless        | W   | 0.082      | 0.477        | 0.001 (0.000)    | -                | -         |     0.96 | arcade, Lake, micro, Seb, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,430.04)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
