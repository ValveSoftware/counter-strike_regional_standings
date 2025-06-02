### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, Mingovi, Snaaz, supar<br />
Global Rank: [238](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  527.4<br />
<br />
Final Rank Value (527.4) = Starting Rank Value (500.6) + Head To Head Adjustments (26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.6
- 400 + ( ( 0.055 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 500.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1465 | 2025-03-28 | MANTRA        | L   | 0.768      | -            | -                | -                | -         |    -8.83 | Drox, Jynx, Mingovi, supar, swerzieN |
|            9 |     1523 | 2025-03-28 | SemperFi      | L   | 0.762      | -            | -                | -                | -         |    -2.67 | Drox, Jynx, Mingovi, Snaaz, supar    |
|            8 |     1602 | 2025-03-27 | Only One Word | W   | 0.755      | 0.143        | 0.002 (0.000)    | 0.225 (0.024)    | 0 (0.000) |    18.52 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |     1775 | 2025-03-21 | Mindfreak     | L   | 0.715      | -            | -                | -                | -         |    -6.39 | Drox, Jynx, Mingovi, supar, swerzieN |
|            6 |     1779 | 2025-03-20 | ex-TALON      | L   | 0.714      | -            | -                | -                | -         |    -3.73 | Drox, Jynx, Mingovi, supar, swerzieN |
|            5 |     2546 | 2025-02-25 | Only One Word | L   | 0.561      | -            | -                | -                | -         |    -3.90 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |     2582 | 2025-02-24 | ex-TALON      | L   | 0.555      | -            | -                | -                | -         |    -3.05 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |     2615 | 2025-02-23 | Rooster       | W   | 0.547      | 0.143        | 0.010 (0.001)    | 0.317 (0.025)    | 0 (0.000) |    14.15 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |     2856 | 2025-02-14 | Housebets     | W   | 0.488      | 0.143        | 0.009 (0.001)    | 0.255 (0.018)    | 0 (0.000) |    12.26 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |     2859 | 2025-02-14 | MANTRA        | W   | 0.487      | 0.143        | 0.002 (0.000)    | 0.221 (0.015)    | 0 (0.000) |    10.42 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
