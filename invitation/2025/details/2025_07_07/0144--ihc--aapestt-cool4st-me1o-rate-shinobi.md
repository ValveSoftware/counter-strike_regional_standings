### Roster Details<br />
Team Name: IHC<br />
Roster: Aapestt, cool4st, me1o, rate, shinobi<br />
Global Rank: [144](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  661.1<br />
<br />
Final Rank Value (661.1) = Starting Rank Value (646.0) + Head To Head Adjustments (15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.0
- 400 + ( ( 0.132 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 646.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1943 | 2025-03-28 | Chinggis Warriors | L   | 0.530      | -            | -                | -                | -         |    -1.36 | Aapestt, cool4st, me1o, rate, shinobi |
|            6 |     2001 | 2025-03-28 | Victores Sumus    | W   | 0.524      | 0.143        | 0.001 (0.000)    | 0.053 (0.004)    | 0 (0.000) |     7.78 | Aapestt, cool4st, me1o, rate, shinobi |
|            5 |     2063 | 2025-03-27 | The Huns          | L   | 0.519      | -            | -                | -                | -         |    -2.27 | Aapestt, cool4st, me1o, rate, shinobi |
|            4 |     2401 | 2025-03-15 | NomadS            | W   | 0.443      | 0.333        | 0.016 (0.002)    | 0.198 (0.029)    | 1 (0.443) |     9.95 | Aapestt, cool4st, me1o, rate, shinobi |
|            3 |     2431 | 2025-03-15 | Chinggis Warriors | L   | 0.438      | -            | -                | -                | -         |    -1.00 | Aapestt, cool4st, me1o, rate, shinobi |
|            2 |     3551 | 2025-02-08 | The Huns          | L   | 0.205      | -            | -                | -                | -         |    -0.91 | clouden, cool4st, me1o, rate, yAmi    |
|            1 |     3559 | 2025-02-08 | NomadS            | W   | 0.205      | 0.143        | 0.002 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     2.89 | clouden, cool4st, me1o, rate, yAmi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($667.66)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.445 | $1,500.00      | $667.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
