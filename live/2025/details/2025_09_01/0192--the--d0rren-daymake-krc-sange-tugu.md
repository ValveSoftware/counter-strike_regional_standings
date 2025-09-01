### Roster Details<br />
Team Name: THE<br />
Roster: d0RREN, DayMake, krc, Sange, Tugu<br />
Global Rank: [192](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  605.7<br />
<br />
Final Rank Value (605.7) = Starting Rank Value (602.7) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.106<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 602.7
- 400 + ( ( 0.106 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 602.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2355 | 2025-04-29 | ROSY              | L   | 0.365      | -            | -                | -                | -         |    -5.86 | DayMake, kaito, krc, Sange, Tugu   |
|           14 |     2809 | 2025-04-08 | TYLOO             | L   | 0.225      | -            | -                | -                | -         |    -0.01 | d0RREN, DayMake, krc, Sange, Tugu  |
|           13 |     2810 | 2025-04-08 | TYLOO             | L   | 0.225      | -            | -                | -                | -         |    -0.01 | d0RREN, DayMake, krc, Sange, Tugu  |
|           12 |     2980 | 2025-04-02 | Chinggis Warriors | L   | 0.186      | -            | -                | -                | -         |    -0.37 | d0RREN, DayMake, krc, Sange, Tugu  |
|           11 |     2987 | 2025-04-02 | Chinggis Warriors | L   | 0.186      | -            | -                | -                | -         |    -0.37 | d0RREN, DayMake, krc, Sange, Tugu  |
|           10 |     3037 | 2025-04-01 | Lynn Vision       | L   | 0.179      | -            | -                | -                | -         |    -0.03 | d0RREN, DayMake, krc, Sange, Tugu  |
|            9 |     3046 | 2025-04-01 | Lynn Vision       | L   | 0.179      | -            | -                | -                | -         |    -0.03 | d0RREN, DayMake, krc, Sange, Tugu  |
|            8 |     3328 | 2025-03-26 | Just Swing        | W   | 0.140      | 0.417        | 0.001 (0.000)    | 0.153 (0.009)    | 0 (0.000) |     3.11 | d0RREN, DayMake, krc, Sange, Tugu  |
|            7 |     3336 | 2025-03-26 | Just Swing        | W   | 0.139      | 0.417        | 0.001 (0.000)    | 0.153 (0.009)    | 0 (0.000) |     3.14 | d0RREN, DayMake, krc, Sange, Tugu  |
|            6 |     3373 | 2025-03-25 | harizma           | W   | 0.133      | 0.417        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     1.48 | d0RREN, DayMake, krc, Sange, Tugu  |
|            5 |     3381 | 2025-03-25 | harizma           | W   | 0.133      | 0.417        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     1.49 | d0RREN, DayMake, krc, Sange, Tugu  |
|            4 |     3532 | 2025-03-19 | ROSY              | W   | 0.093      | 0.417        | 0.002 (0.000)    | 0.053 (0.002)    | 0 (0.000) |     1.49 | d0RREN, DayMake, kaito, krc, Sange |
|            3 |     3537 | 2025-03-19 | ROSY              | W   | 0.093      | 0.417        | 0.002 (0.000)    | 0.053 (0.002)    | 0 (0.000) |     1.50 | d0RREN, DayMake, kaito, krc, Sange |
|            2 |     3572 | 2025-03-18 | Gods Reign        | L   | 0.086      | -            | -                | -                | -         |    -1.24 | d0RREN, DayMake, kaito, krc, Sange |
|            1 |     3580 | 2025-03-18 | Gods Reign        | L   | 0.086      | -            | -                | -                | -         |    -1.24 | d0RREN, DayMake, kaito, krc, Sange |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($319.18)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.399 | $800.00        | $319.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
