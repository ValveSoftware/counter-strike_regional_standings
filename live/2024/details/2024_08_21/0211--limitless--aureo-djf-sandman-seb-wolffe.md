### Roster Details<br />
Team Name: Limitless<br />
Roster: Aureo, DJF, Sandman, Seb, Wolffe<br />
Global Rank: [211](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_21.md)<br />
Regional Rank: [59]( ../../standings_americas_2024_08_21.md)<br />
<br />
Final Rank Value:  474.6<br />
<br />
Final Rank Value (474.6) = Starting Rank Value (511.6) + Head To Head Adjustments (-37.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.6
- 400 + ( ( 0.056 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 511.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       90 | 2024-08-19 | Priority         | L   | 1.000      | -            | -                | -                | -         |   -18.99 | Aureo, DJF, Sandman, Seb, Wolffe |
|           15 |      224 | 2024-08-14 | undefined        | L   | 1.000      | -            | -                | -                | -         |    -6.79 | DJF, Seb, Tender, wiz, Wolffe    |
|           14 |      239 | 2024-08-13 | FLUFFY AIMERS    | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.417 (0.199)    | 0 (0.000) |    24.18 | DJF, Seb, Tender, wiz, Wolffe    |
|           13 |      242 | 2024-08-13 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -6.82 | DJF, Seb, Tender, wiz, Wolffe    |
|           12 |      690 | 2024-07-31 | M80              | L   | 1.000      | -            | -                | -                | -         |    -0.49 | DJF, Seb, Tender, wiz, Wolffe    |
|           11 |      696 | 2024-07-31 | M80              | L   | 1.000      | -            | -                | -                | -         |    -0.49 | DJF, Seb, Tender, wiz, Wolffe    |
|           10 |      937 | 2024-07-24 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -4.40 | DJF, Seb, Tender, wiz, Wolffe    |
|            9 |      941 | 2024-07-24 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -4.59 | DJF, Seb, Tender, wiz, Wolffe    |
|            8 |      969 | 2024-07-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -2.17 | DJF, Seb, Tender, wiz, Wolffe    |
|            7 |      971 | 2024-07-23 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -2.22 | DJF, Seb, Tender, wiz, Wolffe    |
|            6 |     1203 | 2024-07-17 | Wildcard         | L   | 0.968      | -            | -                | -                | -         |    -2.16 | DJF, Seb, Tender, wiz, Wolffe    |
|            5 |     1206 | 2024-07-17 | Wildcard         | L   | 0.968      | -            | -                | -                | -         |    -2.21 | DJF, Seb, Tender, wiz, Wolffe    |
|            4 |     1262 | 2024-07-16 | Party Astronauts | L   | 0.961      | -            | -                | -                | -         |    -2.23 | DJF, Seb, Tender, wiz, Wolffe    |
|            3 |     1266 | 2024-07-16 | Party Astronauts | L   | 0.961      | -            | -                | -                | -         |    -2.28 | DJF, Seb, Tender, wiz, Wolffe    |
|            2 |     1313 | 2024-07-15 | NRG              | L   | 0.955      | -            | -                | -                | -         |    -2.64 | DJF, Seb, Tender, wiz, Wolffe    |
|            1 |     1316 | 2024-07-15 | NRG              | L   | 0.955      | -            | -                | -                | -         |    -2.71 | DJF, Seb, Tender, wiz, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
