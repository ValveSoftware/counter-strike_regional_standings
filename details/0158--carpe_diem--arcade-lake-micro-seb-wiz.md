### Roster Details<br />
Team Name: Carpe Diem<br />
Roster: arcade, Lake, micro, Seb, wiz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  703.0<br />
<br />
Final Rank Value (703.0) = Starting Rank Value (712.1) + Head To Head Adjustments (-9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.1
- 400 + ( ( 0.145 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 712.1


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
|           20 |     2229 | 2024-04-11 | Mythic           | W   | 0.556      | 0.477        | 0.015 (0.004)    | 0.341 (0.090)    | 0 (0.000) |    12.04 | arcade, Lake, micro, Seb, wiz |
|           19 |     2232 | 2024-04-11 | Mythic           | L   | 0.556      | -            | -                | -                | -         |    -5.51 | arcade, Lake, micro, Seb, wiz |
|           18 |     2319 | 2024-04-09 | NRG              | L   | 0.543      | -            | -                | -                | -         |    -4.07 | arcade, Lake, micro, Seb, wiz |
|           17 |     2322 | 2024-04-09 | NRG              | L   | 0.542      | -            | -                | -                | -         |    -4.21 | arcade, Lake, micro, Seb, wiz |
|           16 |     2446 | 2024-04-04 | Perseverance     | L   | 0.509      | -            | -                | -                | -         |    -6.28 | arcade, Lake, micro, Seb, wiz |
|           15 |     2452 | 2024-04-04 | Perseverance     | L   | 0.509      | -            | -                | -                | -         |    -6.56 | arcade, Lake, micro, Seb, wiz |
|           14 |     2625 | 2024-03-27 | Party Astronauts | L   | 0.456      | -            | -                | -                | -         |    -2.40 | arcade, Lake, micro, Seb, wiz |
|           13 |     2629 | 2024-03-27 | Party Astronauts | L   | 0.456      | -            | -                | -                | -         |    -2.45 | arcade, Lake, micro, Seb, wiz |
|           12 |     2844 | 2024-03-15 | Elevate          | L   | 0.376      | -            | -                | -                | -         |    -1.45 | arcade, Lake, micro, Seb, wiz |
|           11 |     2846 | 2024-03-15 | Elevate          | L   | 0.376      | -            | -                | -                | -         |    -1.47 | arcade, Lake, micro, Seb, wiz |
|           10 |     2906 | 2024-03-13 | Party Astronauts | L   | 0.362      | -            | -                | -                | -         |    -1.99 | arcade, Lake, micro, Seb, wiz |
|            9 |     2943 | 2024-03-12 | NRG              | W   | 0.356      | 0.143        | 0.026 (0.001)    | 0.515 (0.026)    | 0 (0.000) |     8.18 | arcade, Lake, micro, Seb, wiz |
|            8 |     3078 | 2024-03-06 | Limitless        | W   | 0.316      | 0.477        | 0.002 (0.000)    | 0.214 (0.032)    | 0 (0.000) |     4.59 | arcade, Lake, micro, Seb, wiz |
|            7 |     3081 | 2024-03-06 | Limitless        | W   | 0.316      | 0.477        | 0.002 (0.000)    | 0.214 (0.032)    | 0 (0.000) |     4.71 | arcade, Lake, micro, Seb, wiz |
|            6 |     3573 | 2024-02-14 | Rocket           | W   | 0.176      | 0.477        | 0.000 (0.000)    | 0.023 (0.002)    | 0 (0.000) |     1.40 | arcade, Lake, micro, Seb, wiz |
|            5 |     3575 | 2024-02-14 | Rocket           | L   | 0.176      | -            | -                | -                | -         |    -4.19 | arcade, Lake, micro, Seb, wiz |
|            4 |     3612 | 2024-02-13 | FLUFFY AIMERS    | W   | 0.170      | 0.477        | 0.016 (0.001)    | 0.140 (0.011)    | 0 (0.000) |     3.50 | arcade, Lake, micro, Seb, wiz |
|            3 |     3616 | 2024-02-13 | FLUFFY AIMERS    | L   | 0.169      | -            | -                | -                | -         |    -1.86 | arcade, Lake, micro, Seb, wiz |
|            2 |     3776 | 2024-02-02 | Party Astronauts | L   | 0.096      | -            | -                | -                | -         |    -0.51 | arcade, Lake, Seb, Walco, wiz |
|            1 |     3783 | 2024-02-02 | Wildcard         | L   | 0.095      | -            | -                | -                | -         |    -0.59 | arcade, Lake, Seb, Walco, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,899.03)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
