### Roster Details<br />
Team Name: hindsight<br />
Roster: Ann4, Kaoday, Madam, mikeri, pullox<br />
Global Rank: [289](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [180]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  573.0<br />
<br />
Final Rank Value (573.0) = Starting Rank Value (593.2) + Head To Head Adjustments (-20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 593.2
- 400 + ( ( 0.104 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 593.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2038 | 2026-03-18 | Rune Eaters  | L   | 0.887      | -            | -                | -                | -         |    -4.88 | Ann4, Kaoday, Madam, mikeri, pullox |
|            6 |     2133 | 2026-03-16 | MANA         | L   | 0.874      | -            | -                | -                | -         |    -2.35 | Ann4, Kaoday, Madam, mikeri, pullox |
|            5 |     3751 | 2026-02-12 | Let Her Cook | L   | 0.662      | -            | -                | -                | -         |    -7.62 | Ann4, Kaoday, Madam, mikeri, pullox |
|            4 |     3763 | 2026-02-12 | confidence   | W   | 0.661      | 0.384        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.19 | Ann4, Kaoday, Madam, mikeri, pullox |
|            3 |     3832 | 2026-02-10 | Let Her Cook | L   | 0.648      | -            | -                | -                | -         |    -7.41 | Ann4, Kaoday, Madam, mikeri, pullox |
|            2 |     4538 | 2026-01-18 | Clutchain fe | L   | 0.492      | -            | -                | -                | -         |    -4.97 | Ann4, Kaoday, Madam, mikeri, pullox |
|            1 |     4691 | 2026-01-15 | TNC          | L   | 0.472      | -            | -                | -                | -         |    -1.19 | Ann4, Kaoday, Madam, mikeri, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($340.34)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.681 | $500.00        | $340.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
