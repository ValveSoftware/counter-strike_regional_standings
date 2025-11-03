### Roster Details<br />
Team Name: The QUBE<br />
Roster: Cozen, Kamui, Paranormal, soloooS<br />
Global Rank: [149](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  698.5<br />
<br />
Final Rank Value (698.5) = Starting Rank Value (700.5) + Head To Head Adjustments (-2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.5
- 400 + ( ( 0.160 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 700.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      866 | 2025-10-01 | Chinggis Warriors | L   | 0.983      | -            | -                | -                | -         |    -5.72 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            6 |     1012 | 2025-09-28 | Chinggis Warriors | W   | 0.958      | 0.333        | 0.015 (0.005)    | 0.434 (0.139)    | 1 (0.958) |    25.14 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            5 |     1016 | 2025-09-28 | Eruption          | L   | 0.958      | -            | -                | -                | -         |    -8.69 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            4 |     1973 | 2025-08-29 | Eruption          | L   | 0.759      | -            | -                | -                | -         |    -7.08 | Aceari, Cozen, Kamui, Paranormal, soloooS    |
|            3 |     1985 | 2025-08-29 | The Huns          | L   | 0.758      | -            | -                | -                | -         |    -1.84 | Aceari, Cozen, Kamui, Paranormal, soloooS    |
|            2 |     3126 | 2025-07-11 | HOTU              | L   | 0.432      | -            | -                | -                | -         |    -5.92 | Aceari, bladee, Cozen, Kamui, soloooS        |
|            1 |     3136 | 2025-07-11 | Underground       | W   | 0.431      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.12 | Aceari, bladee, Cozen, Kamui, soloooS        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,758.81)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.986 | $1,000.00      | $985.80         |
| 2025-09-28 |      0.959 | $1,250.00      | $1,198.90       |
| 2025-08-30 |      0.765 | $750.00        | $574.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
