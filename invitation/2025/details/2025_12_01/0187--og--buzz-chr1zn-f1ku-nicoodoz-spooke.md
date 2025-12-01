### Roster Details<br />
Team Name: OG<br />
Roster: Buzz, Chr1zN, F1KU, nicoodoz, spooke<br />
Global Rank: [187](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [116]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  676.4<br />
<br />
Final Rank Value (676.4) = Starting Rank Value (666.5) + Head To Head Adjustments (9.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.5
- 400 + ( ( 0.140 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 666.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4039 | 2025-07-15 | FUT          | L   | 0.274      | -            | -                | -                | -         |    -0.07 | adamb, Chr1zN, F1KU, nicoodoz, spooke |
|            8 |     4045 | 2025-07-15 | Nemiga       | L   | 0.273      | -            | -                | -                | -         |    -0.67 | adamb, Chr1zN, F1KU, nicoodoz, spooke |
|            7 |     4062 | 2025-07-14 | Gentle Mates | W   | 0.267      | 0.624        | 0.182 (0.030)    | 0.665 (0.111)    | 0 (0.000) |     8.35 | adamb, Chr1zN, F1KU, nicoodoz, spooke |
|            6 |     4358 | 2025-06-20 | fnatic       | L   | 0.106      | -            | -                | -                | -         |    -0.04 | Buzz, Chr1zN, F1KU, nicoodoz, spooke  |
|            5 |     4391 | 2025-06-18 | RUBY         | W   | 0.092      | 0.480        | 0.049 (0.002)    | 1.000 (0.044)    | 0 (0.000) |     2.50 | Buzz, Chr1zN, F1KU, nicoodoz, spooke  |
|            4 |     4600 | 2025-06-08 | Falcons      | L   | 0.028      | -            | -                | -                | -         |    -0.00 | Buzz, Chr1zN, F1KU, nicoodoz, spooke  |
|            3 |     4615 | 2025-06-07 | M80          | L   | 0.022      | -            | -                | -                | -         |    -0.01 | Buzz, Chr1zN, F1KU, nicoodoz, spooke  |
|            2 |     4628 | 2025-06-07 | Virtus.pro   | L   | 0.020      | -            | -                | -                | -         |    -0.27 | Buzz, Chr1zN, F1KU, nicoodoz, spooke  |
|            1 |     4651 | 2025-06-05 | NRG          | W   | 0.007      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.007) |     0.04 | Buzz, Chr1zN, F1KU, nicoodoz, spooke  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($743.11)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.120 | $2,750.00      | $329.94         |
| 2025-06-10 |      0.041 | $10,000.00     | $413.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
